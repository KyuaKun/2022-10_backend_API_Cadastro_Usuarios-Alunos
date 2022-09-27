import { Router } from "express";
import UserController from "../controllers/UserController";
import regularPermission from "../middlewares/regularUser";
import admPermission from "../middlewares/admUser";

const router = new Router();

router.get("/", admPermission, UserController.index);
router.get("/:id", admPermission, UserController.show);

router.post("/", UserController.store);
router.put("/", regularPermission, UserController.update);
router.delete("/", regularPermission, UserController.delete);

export default router;
