import express from "express";
import {
  getComplaintTransfers,
  getComplaintTransferById,
  createComplaintTransfer,
  updateComplaintTransfer,
  deleteComplaintTransfer,
} from "../controllers/complaintTransferController.js";

const router = express.Router();

router.get("/", getComplaintTransfers);
router.get("/:id", getComplaintTransferById);
router.post("/", createComplaintTransfer);
router.put("/:id", updateComplaintTransfer);
router.delete("/:id", deleteComplaintTransfer);

export default router;
