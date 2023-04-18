import express from "express";
import { login, logout } from "../controllers/authController.js";

const router = express.Router();

router.post("/v1/api/login", login);
router.post("/v1/api/logout", logout);

export default router;
