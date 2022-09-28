import { Router } from "express";
import AlunoController from "../controllers/AlunoController";

const router = new Router();

router.post("/", AlunoController.store);
router.get("/", AlunoController.index);

export default router;
