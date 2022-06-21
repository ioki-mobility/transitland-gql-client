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
    })

    await generator;
    exit(0);
})();
