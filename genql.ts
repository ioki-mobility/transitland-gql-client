import path from 'path';
import { exit } from 'process';
import { generate } from '@genql/cli';

void (async function () {
    const generator = generate({
        sortProperties: true,
        schema: path.join(__dirname, 'landing/schema.graphqls'),
        output: path.join(__dirname, 'src/_client'),
        verbose: true,
        onlyEsModules: true,
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
