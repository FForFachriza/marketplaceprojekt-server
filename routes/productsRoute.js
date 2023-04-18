import express from "express";
import { addProduct, getProduct, getProductById, deleteProduct, editProduct } from "../controllers/productsController.js";

const router = express.Router();

router.get("/v1/api/products", getProduct);
router.get("/v1/api/products/:id", getProductById);
router.post("/v1/api/products", addProduct);
router.delete("/v1/api/products/:id", deleteProduct);
router.patch("/v1/api/products/:id", editProduct);

export default router;
