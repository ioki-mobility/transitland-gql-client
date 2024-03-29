# TransitLand Graphql Client

![transitland-logo-light](./assets/transitland-dark.png#gh-light-mode-only)
![transitland-logo-dark](./assets/transitland-light.png#gh-dark-mode-only)

[![npm (scoped)](https://img.shields.io/npm/v/@ioki/transitland-gql-client)](https://www.npmjs.com/package/@ioki/transitland-gql-client)
[![size](https://img.shields.io/bundlephobia/minzip/@ioki/transitland-gql-client)](https://bundlephobia.com/package/@ioki/transitland-gql-client@latest)
[![npm (downloads)](https://img.shields.io/npm/dm/@ioki/transitland-gql-client)](https://www.npmjs.com/package/@ioki/transitland-gql-client)
[![github](https://img.shields.io/github/license/ioki-mobility/transitland-gql-client?)](./LICENSE.md)
[![test](https://github.com/ioki-mobility/transitland-gql-client/actions/workflows/test.yaml/badge.svg)](https://github.com/ioki-mobility/transitland-gql-client/actions/workflows/test.yaml)
[![release](https://github.com/ioki-mobility/transitland-gql-client/actions/workflows/release.yaml/badge.svg)](https://github.com/ioki-mobility/transitland-gql-client/actions/workflows/release.yaml)

## About

Since the [Transitland](https://www.transit.land/) released its new and shiny [GraphQL API](https://www.transit.land/documentation/graphql-api/), it is possible to query the API using [GraphQL](https://graphql.org/).

The client is being built using [GenQL](https://genql.vercel.app/) and updated hourly, if there are upstream changes.

## Getting Started

First add the library and its peerDependency to your project:

* npm

  ```sh
  npm i @ioki/transitland-gql-client@latest
  ```

* yarn

  ```sh
  yarn add @ioki/transitland-gql-client@latest
  ```

### Setup

1. Get an API key with access to the gql api at [transit.land](https://www.transit.land/documentation/index#sign-up)
2. Create a client instance:

```ts
import { createClient } from '@ioki/transitland-gql-client';

const transitlandClient = createClient({
  apiKey: "YOUR_SUPER_SECRET_API_KEY",
  fetch: fetchClient // not needed for browser and node >= v18 (and >=v16 with --experimental-fetch)
});
```

## Usage

GenQL provides a neat [converter](https://genql.vercel.app/converter) from GraphQL to TypeScript. So you can actually just test the queries you want to use in the [playground](https://www.transit.land/documentation/api/graphql-console).

## Mocking

Using GraphQL's strict type definitions, it is pretty easy to generate a mock server you could use during your tests. An extensive example is [stored as a test](src/mock.test.ts).

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

## Contributing (complexity, asc)

1. [join us @ioki](https://ioki.com/about-ioki/jobs/) and make this one of your projects
2. create issues and pull requests, we're happy to enhance this

## Contact

<a href="https://ioki.com/ioki-devs/">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/ioki-mobility/transitland-gql-client/blob/main/assets/ioki-light.png?raw=true">
    <img alt="ioki logo" src="https://github.com/ioki-mobility/transitland-gql-client/blob/main/assets/ioki-dark.png?raw=true">
  </picture>
</a>

ioki Mobility - [@ioki_mobility](https://twitter.com/ioki_mobility)

Project Link: [https://github.com/ioki-mobility/transitland-gql-client](https://github.com/ioki-mobility/transitland-gql-client)
