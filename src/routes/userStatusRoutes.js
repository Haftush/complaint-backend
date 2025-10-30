import express from "express";
import {
  getUserStatuses,
  getUserStatusById,
  createUserStatus,
  updateUserStatus,
  deleteUserStatus,
} from "../controllers/userStatusController.js";

const router = express.Router();

router.get("/", getUserStatuses);
router.get("/:id", getUserStatusById);
router.post("/", createUserStatus);
router.put("/:id", updateUserStatus);
router.delete("/:id", deleteUserStatus);

export default router;
