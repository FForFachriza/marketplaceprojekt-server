import express from "express";
import { addStatus, deleteStatus, editStatus, getStatus, getStatusById } from "../controllers/statusController.js";
import { verifyUser, verifyRole } from "../middlewares/usersMiddleware.js";

const router = express.Router();

router.get("/v1/api/status", verifyUser, getStatus);
router.get("/v1/api/status/:id", verifyUser, getStatusById);
router.post("/v1/api/status", verifyUser, verifyRole, addStatus);
router.patch("/v1/api/status/:id", verifyUser, verifyRole, editStatus);
router.delete("/v1/api/status/:id", verifyUser, verifyRole, deleteStatus);

export default router;
