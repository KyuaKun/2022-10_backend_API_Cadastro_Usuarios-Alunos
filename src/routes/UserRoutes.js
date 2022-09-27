import { Router } from "express";
import UserController from "../controllers/UserController";
import regularPermission from "../middlewares/regularUser";
import admPermission from "../middlewares/admUser";

const router = new Router();

router.get("/index", admPermission, UserController.index);
router.get("/:id", admPermission, UserController.show);

router.post("/store", UserController.store);
router.put("/update", regularPermission, UserController.update);
router.delete("/delete", regularPermission, UserController.delete);

export default router;
