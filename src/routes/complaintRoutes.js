import express from "express";
import {
  getComplaints,
  getComplaintById,
  createComplaint,
  updateComplaint,
  deleteComplaint,
  getComplaintsByBranch,
} from "../controllers/complaintController.js";

const router = express.Router();

router.get("/", getComplaints);
router.get("/:id", getComplaintById);
router.post("/", createComplaint);
router.put("/:id", updateComplaint);
router.delete("/:id", deleteComplaint);
router.get("/branch/:branchId", getComplaintsByBranch);

export default router;
