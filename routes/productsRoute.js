import express from "express";
import { addProduct,getProduct,getProductById } from "../controllers/productsController.js";

const router = express.Router();

router.get("/v1/api/products", getProduct)
router.get("/v1/api/products/:id", getProductById)
router.post("/v1/api/products", addProduct)

export default router;