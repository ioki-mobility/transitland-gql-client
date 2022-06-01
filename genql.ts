/* istanbul ignore file */
import path from 'path';
import { exit } from 'process';

import { generate } from '@genql/cli';


void (async function () {
  const transitlandClientGenerator = generate({
    onlyCJSModules: false,
    sortProperties: true,
    endpoint: 'https://demo.transit.land/api/v2/query',
    output: path.join(__dirname, 'src/_client'),
    headers: {
      Referer: 'https://www.transit.land/',
    },
  })
    .then(() => console.info('transitland client generated'))
    .catch((e) => console.error(e));

  await transitlandClientGenerator;
  exit(0);
})();
