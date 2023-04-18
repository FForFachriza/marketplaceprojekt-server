import express from "express";
import { addProduct, getProduct, getProductById, deleteProduct, editProduct } from "../controllers/productsController.js";
import { verifyUser, verifyRole } from "../middlewares/usersMiddleware.js";

const router = express.Router();

router.get("/v1/api/products", verifyUser, getProduct);
router.get("/v1/api/products/:id", verifyUser, getProductById);
router.post("/v1/api/products", verifyUser, verifyRole, addProduct);
router.delete("/v1/api/products/:id", verifyUser, verifyRole, deleteProduct);
router.patch("/v1/api/products/:id", verifyUser, verifyRole, editProduct);

export default router;
