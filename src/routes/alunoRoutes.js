import { Router } from "express";
import AlunoController from "../controllers/AlunoController";

const router = new Router();

router.post("/", AlunoController.store);
router.get("/", AlunoController.index);
router.get("/:id", AlunoController.show);

export default router;
