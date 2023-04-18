import express from "express";
import { addUsers, getUsersById, getUsers, deleteUsers, editUsers } from "../controllers/userController.js";
import { verifyUser, verifyRole } from "../middlewares/usersMiddleware.js";

const router = express.Router();

router.get("/v1/api/users", getUsers);
router.get("/v1/api/users/:id", getUsersById);
router.post("/v1/api/users", addUsers);
router.delete("/v1/api/users/:id", deleteUsers);
router.patch("/v1/api/users/:id", editUsers);

export default router;
