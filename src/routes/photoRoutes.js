import { Router } from "express";
import PhotoController from "../controllers/PhotoController";

const router = new Router();

router.get("/", PhotoController.index);

export default router;
