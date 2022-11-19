import { Miniflare } from "miniflare";

const mf = new Miniflare({
  script: `
  addEventListener("fetch", (event) => {
    event.respondWith(new Response("Hello Miniflare 2!"));
  });
  `,
});
const res = await mf.dispatchFetch("http://localhost:8787/");
console.log(await res.text()); // Hello Miniflare!