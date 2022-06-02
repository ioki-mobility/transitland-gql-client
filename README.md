# transitland-gql-client

![npm](https://img.shields.io/npm/dm/transitland-gql-client)
![GitHub](https://img.shields.io/github/license/boredland/transitland-gql-client)
[![release](https://github.com/boredland/transitland-gql-client/actions/workflows/release.yaml/badge.svg)](https://github.com/boredland/transitland-gql-client/actions/workflows/release.yaml)

## About

Since the [Transitland](https://transitland.org/) released its new and shiny [GraphQL API](https://www.transit.land/documentation/graphql-api/), it is possible to query the API using the [GraphQL](https://graphql.org/) language.

### Built With

The client is being built using [genql](https://genql.vercel.app/) and updated hourly, if there are upstream changes.

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

First add the library to your `package.json` file:

* npm

  ```sh
  npm install transitland-gql-client@latest
  ```

* yarn

  ```sh
  yarn add transitland-gql-client@latest
  ```

Keep in mind that the library has a peer dependency on graphql, so you will need to install that as well.

### Setup

1. Get a free API Key at [transit.land](https://www.transit.land/documentation/index#sign-up)
2. Create a client instance:

```ts
import { createClient } from 'transitland-gql-client';

const transitlandClient = createClient({
  apiKey: "YOUR_SUPER_SECRET_API_KEY"
});
```

## Usage

GenQL provides a neat [converter](https://genql.vercel.app/converter) from GraphQL to TypeScript. So you can acutally just test the queries you want to use in the [playground](https://www.transit.land/documentation/api/graphql-console).

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

## Contact

Jonas Strassel - [@boredland122](https://twitter.com/boredland122)

Project Link: [https://github.com/boredland/transitland-gql-client](https://github.com/boredland/transitland-gql-client)
