import { Miniflare } from "miniflare";

const mf = new Miniflare({
  script: `
  addEventListener("fetch", (event, ctx) => {
    event.respondWith(await ctx.hello.fetch());
  });
  `,
  mounts: {
    hello: "./services/hello",
  },
});

const res = await mf.dispatchFetch("http://localhost:8787/");
console.log(await res.text());

// const server = await mf.createServer(); // Create and start http.Server instance
// server.listen(8787, () => {});