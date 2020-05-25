import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/routes.ts";
const port = 8080;
const app = new Application();

app.use(router.routes());

console.log("Server running");
await app.listen({ port });
