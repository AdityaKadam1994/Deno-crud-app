import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/routes.ts";
const port = 8080;
const app = new Application();

app.use(router.routes());
// app.use(router.allowedMethods());

// await router.get("/api/items", (req, res) => {
//  res.json("Hello World");
// });
console.log("Server running");
await app.listen({ port });
