import express from "express";
import { addUsers,getUsersById,getUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/v1/api/users", getUsers)
router.get("/v1/api/users/:id", getUsersById)
router.post("/v1/api/users", addUsers)

export default router;