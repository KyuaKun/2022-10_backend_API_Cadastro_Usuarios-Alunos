import { Router } from "express";

import PhotoController from "../controllers/PhotoController";
import regularUser from "../middlewares/regularUser";

const router = new Router();

router.post("/", regularUser, PhotoController.store);

export default router;
