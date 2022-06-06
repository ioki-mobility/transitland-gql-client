import { createClient } from "../dist";

it('needs TRANSITLAND_API_KEY to be set', () => {
  expect(process.env.TRANSITLAND_API_KEY).not.toBeUndefined()
  expect(process.env.TRANSITLAND_API_KEY).not.toBeNull()
  expect(process.env.TRANSITLAND_API_KEY).not.toBe("")
});

const transitlandClient = createClient({
  apiKey: process.env.TRANSITLAND_API_KEY!,
  url: process.env.TRANSITLAND_URL,
  headers: {
    Referer: 'https://www.transit.land/',
  },
});

it('should have no mutations', () => {
  expect(transitlandClient).not.toHaveProperty('mutation')
})

it('should have no wsClient', () => {
  expect(transitlandClient).not.toHaveProperty('wsClient')
  expect(transitlandClient).not.toHaveProperty('subscription')
})

it("can fetch feeds", async () => {
  const result = await transitlandClient.query({
    feeds: [
      {
        where: {
          onestop_id: "f-9q9-bart"
        }
      },
      {
        onestop_id: true
      }
    ]
  });
  expect(result.feeds[0]).toMatchInlineSnapshot(`
      Object {
        "onestop_id": "f-9q9-bart",
      }
    `);
});

it("can not batch queries", async () => {
  /**
   * batching does not work in gqlgen, the backend transitland uses.
   * this test ensures nothing changed about that.
   * https://github.com/99designs/gqlgen/discussions/1932
   */
  jest.useFakeTimers();
  const batchClient = createClient({
    apiKey: process.env.TRANSITLAND_API_KEY!,
    url: process.env.TRANSITLAND_URL,
    batch: true,
    headers: {
      Referer: 'https://www.transit.land/',
    },
  });
  const batch = Array(10).fill(0).map((_v, idx) => {
    return batchClient.query({
      stops: [
        { limit: 1, after: idx + 1 },
        { 
          onestop_id: true,
        }
      ]
    })
  });
  expect(Promise.all(batch)).rejects.toEqual('error');
});
