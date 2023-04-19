import express from "express";
import { getCategories, addCategories, deleteCategories, editCategories, getCategoriesById } from "../controllers/categoriesController.js";
import { verifyUser, verifyRole } from "../middlewares/usersMiddleware.js";

const router = express.Router();

router.get("/v1/api/categories", verifyUser, getCategories);
router.get("/v1/api/categories/:id", verifyUser, getCategoriesById);
router.post("/v1/api/categories", verifyUser, verifyRole, addCategories);
router.patch("/v1/api/categories/:id", verifyUser, verifyRole, editCategories);
router.delete("/v1/api/categories/:id", verifyUser, verifyRole, deleteCategories);

export default router;
