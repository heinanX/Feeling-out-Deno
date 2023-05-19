import { createPassword } from "./denopass.ts";
import { serve } from "https://deno.land/std@0.96.0/http/server.ts";

const server = serve({ port: 8800 });
console.log(`Listening on port localhost:8800 ...`);

for await (const req of server) {
  const { method, url } = req;
  if (method !== "GET") {
    req.respond({ status: 405, body: "Denied Method" });
    continue;
  }

  const match = url.match(/^\/password\/(.+)$/);
  
  if (match) {
    const accountName = match[1];
    const password = createPassword(accountName);
    req.respond({ status: 201, body: password });
  } else {
    req.respond({ status: 404, body: "Not Found" });
  }
}
