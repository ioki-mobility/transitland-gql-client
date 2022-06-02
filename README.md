# TransitLand Graphql Client

![transitland-logo](https://images.squarespace-cdn.com/content/v1/59821760914e6b087ecd856b/1502488142465-3WJZB7YR40PXKKB77QYW/image-asset.png?format=500w)

![npm](https://img.shields.io/npm/dm/@ioki/transitland-gql-client)
![GitHub](https://img.shields.io/github/license/ioki-mobility/transitland-gql-client)
[![test](https://github.com/ioki-mobility/transitland-gql-client/actions/workflows/test.yaml/badge.svg)](https://github.com/ioki-mobility/transitland-gql-client/actions/workflows/test.yaml)
[![release](https://github.com/ioki-mobility/transitland-gql-client/actions/workflows/release.yaml/badge.svg)](https://github.com/ioki-mobility/transitland-gql-client/actions/workflows/release.yaml)

## About

Since the [Transitland](https://transitland.org/) released its new and shiny [GraphQL API](https://www.transit.land/documentation/graphql-api/), it is possible to query the API using the [GraphQL](https://graphql.org/) language.

The client is being built using [genql](https://genql.vercel.app/) and updated hourly, if there are upstream changes.

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

First add the library and its peerDependency `graphql` to your project:

* npm

  ```sh
  npm install @ioki/transitland-gql-client@latest grapqhl
  ```

* yarn

  ```sh
  yarn add @ioki/transitland-gql-client@latest grapqhl
  ```

### Setup

1. Get an API key with access to the gql api at [transit.land](https://www.transit.land/documentation/index#sign-up)
2. Create a client instance:

```ts
import { createClient } from '@ioki/transitland-gql-client';

const transitlandClient = createClient({
  apiKey: "YOUR_SUPER_SECRET_API_KEY"
});
```

## Usage

GenQL provides a neat [converter](https://genql.vercel.app/converter) from GraphQL to TypeScript. So you can acutally just test the queries you want to use in the [playground](https://www.transit.land/documentation/api/graphql-console).

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

## Contributing (complexity, asc)

1. [join us @ioki](https://ioki.com/en/about-ioki/jobs/) and make this one of your projects
2. create issues and pull requests, we're happy to enhance this

## Contact

[![ioki-logo](https://avatars.githubusercontent.com/u/44803941?s=200&v=4)](https://github.com/ioki-mobility)

ioki Mobility - [@ioki_mobility](https://twitter.com/ioki_mobility)

Project Link: [https://github.com/ioki-mobility/transitland-gql-client](https://github.com/ioki-mobility/transitland-gql-client)
