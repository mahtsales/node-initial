import { Router } from "express";
import { health } from "../controllers/health.controller.js";
//import * as healthController from "../controllers/health.controller";

const router = Router();

router.get("/health", health);
// exemplo de rotas
// router.post("/health", healthpost);
// router.put("/health", healthput);
// router.delete("/health", healthdelete);

export default router;