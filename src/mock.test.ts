import fs from 'fs';
import type { IncomingMessage } from 'http';
import http from 'http';
import type { AddressInfo } from 'net';
import type { Server } from 'http';

import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import connect from 'connect';
import { graphqlHTTP } from 'express-graphql';
import { createClient } from '../dist';
import { Chance } from 'chance';

declare global {
    var __TEST_TRANSITLAND_SERVER__: Server;
}

const transitlandSchemaString = fs.readFileSync(
    require
        // change this to .resolve('@ioki/transitland-gql-client')
        .resolve('../dist/index.js')
        .replace('index.js', 'schema.graphql'),
    'utf8',
);

const transitlandSchema = makeExecutableSchema({
    typeDefs: transitlandSchemaString,
});

// initializing chance (random generator) with a seed so we get deterministic values
const chance = new Chance(109);

const schemaWithMocks = addMocksToSchema({
    schema: transitlandSchema,
    mocks: {
        Query: () => {
            return {
                /**
                 * returning an empty array determines how many mocks of the Route scalar will be filled
                 * without this, it would always return 2 elements for iterables
                 */
                routes: () => [...Array(5)]
            }
        },
        Route: () => {
            // hint: use 
            return {
                route_type: chance.pickone([0,1,2,3]),
                route_id: chance.string({ length: 12 }),
            };
        },
    },
});

const graphqlServer = graphqlHTTP({
    schema: schemaWithMocks,
    graphiql: false,
});

const transitlandServer = () => {
    if (!global.__TEST_TRANSITLAND_SERVER__) {
        const app = connect();

        app.use('/graphql', (req, res) => {
            void graphqlServer(req as IncomingMessage & { url: string }, res);
        });

        global.__TEST_TRANSITLAND_SERVER__ = http.createServer(app).listen(0);
    }
    return global.__TEST_TRANSITLAND_SERVER__;
};


beforeAll(() => {
    transitlandServer();
})

afterAll(() => {
    transitlandServer().close();
});


test('run something against the mocked server', async () => {
    const transitlandClient = createClient({
        apiKey: 'unused',
        url: `http://localhost:${(transitlandServer().address() as AddressInfo).port
            }/graphql`,
    });

    const result = await transitlandClient.query({
        routes: {
            route_type: true,
            route_id: true
        },
        feeds: {
            onestop_id: true
        }
    });

    expect(result.routes).toHaveLength(5);
    expect(result.feeds).toHaveLength(2);
    expect(result).toMatchSnapshot();
})
