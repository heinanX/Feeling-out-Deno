import { createPassword } from "./denopass.ts";
import { serve } from "https://deno.land/std@0.96.0/http/server.ts";

const PORT = 8800;
const server = serve({ port: PORT });
console.log(`Listening on port ${PORT}...`);

for await (const req of server) {
  const { method, url } = req;
  if (method !== "GET") {
    req.respond({ status: 405, body: "Method Not Allowed" });
    continue;
  }

  const match = url.match(/^\/password\/(.+)$/);
  if (match) {
    const accountName = match[1];
    const password = createPassword(accountName);
    req.respond({ body: password });
  } else {
    req.respond({ status: 404, body: "Not Found" });
  }
}
