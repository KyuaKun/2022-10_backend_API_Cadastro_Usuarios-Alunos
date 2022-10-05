import { Router } from "express";
import AlunoController from "../controllers/AlunoController";
import regularPermission from "../middlewares/regularUser";

const router = new Router();

router.post("/", AlunoController.store);
router.get("/all", regularPermission, AlunoController.index);
router.get("/:id", regularPermission, AlunoController.show);
router.put("/:id", regularPermission, AlunoController.update);
router.delete("/:id", regularPermission, AlunoController.delete);

export default router;
