import { Router } from "https://deno.land/x/oak/mod.ts";

import { getlist, createlist } from "../controller/listController.ts";

const router = new Router();

router.get("/api/lists", getlist).post("/api/lists", createlist);

export default router;
