import { Router } from "express";
import UserController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.post("/store", UserController.store);
router.get("/index", loginRequired, UserController.index);
router.get("/:id", UserController.show);
router.put("/update/:id", UserController.update);
router.delete("/delete/:id", UserController.delete);

export default router;
