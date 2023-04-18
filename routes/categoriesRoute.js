import express from "express";
import { getCategories } from "../controllers/categoriesController.js";

const router = express.Router();

router.get("/v1/api/categories", getCategories)


export default router;