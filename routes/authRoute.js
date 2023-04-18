import express from "express";
import { login } from "../controllers/authController.js";

const router = express.Router();

router.post("/v1/api/login", login)


export default router;