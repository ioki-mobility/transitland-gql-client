import path from 'node:path';
import { exit } from 'node:process';
import { generate } from '@genql/cli';
import fs from 'node:fs'

const inputSchema = fs.readFileSync(path.join(__dirname, 'landing/input.graphqls'), 'utf-8');
const directionsSchema = fs.readFileSync(path.join(__dirname, 'landing/directions.graphqls'), 'utf-8');
const gbfsSchema = fs.readFileSync(path.join(__dirname, 'landing/gbfs.graphqls'), 'utf-8');

const schema = fs.readFileSync(path.join(__dirname, 'landing/schema.graphqls'), 'utf-8').concat(inputSchema).concat(directionsSchema).concat(gbfsSchema)

void (async function () {
    const generator = generate({
        sortProperties: true,
        schema: schema.replace(/type Mutation {[^}]*}/gm,  ''),
        output: path.join(__dirname, 'src/_client'),
        verbose: true,
        scalarTypes: {
            Date: 'string', // "2015-07-19"
            Geometry: 'GeoJSON.Geometry',
            LineString: 'GeoJSON.LineString',
            Point: 'GeoJSON.Point',
            Polygon: 'GeoJSON.Polygon',
            Seconds: 'string', // "13:40:00"
            Tags: '{[k: string]: string}',
            Time: 'string', //"2022-06-21T10:00:56.96403Z"
        }
    })

    await generator;
    exit(0);
})();
