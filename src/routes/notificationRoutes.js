import express from "express";
import {
  getNotifications,
  getNotificationById,
  createNotification,
  updateNotification,
  deleteNotification,
  markAsRead,
} from "../controllers/notificationController.js";

const router = express.Router();

router.get("/", getNotifications);
router.get("/:id", getNotificationById);
router.post("/", createNotification);
router.put("/:id", updateNotification);
router.delete("/:id", deleteNotification);
router.patch("/:id/read", markAsRead);

export default router;
