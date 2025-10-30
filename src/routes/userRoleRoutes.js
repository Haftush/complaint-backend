import express from "express";
import {
  getUserRoles,
  getUserRoleById,
  createUserRole,
  updateUserRole,
  deleteUserRole,
} from "../controllers/userRoleController.js";

const router = express.Router();

router.get("/", getUserRoles);
router.get("/:id", getUserRoleById);
router.post("/", createUserRole);
router.put("/:id", updateUserRole);
router.delete("/:id", deleteUserRole);

export default router;
