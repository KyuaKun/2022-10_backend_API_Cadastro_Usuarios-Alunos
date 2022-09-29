import { Router } from "express";
import AlunoController from "../controllers/AlunoController";

const router = new Router();

router.post("/", AlunoController.store);
router.get("/all", AlunoController.index);
router.get("/:id", AlunoController.show);
router.put("/:id", AlunoController.update);
router.delete("/:id", AlunoController.delete);

export default router;
