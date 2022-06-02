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
