import { Router } from "express";
import { asyncHandler } from "../../middleware/asyncHandler.js";
import { userController } from "./user.controller.js";
import { validateUser } from "./user.validation.js";

const router = Router();

router.post("/", validateUser, asyncHandler(userController.createUser));
router.get("/", asyncHandler(userController.getUsers));
router.get("/:id", asyncHandler(userController.getUserById));

export default router;
