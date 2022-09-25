import { Router } from "express";
import UserController from "../controllers/UserController";

const router = new Router();

router.post("/store", UserController.store);
router.get("/index", UserController.index);
router.get("/:id", UserController.show);

export default router;
