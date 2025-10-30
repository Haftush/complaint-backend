import express from "express";
import {
  getCaseAssignments,
  getCaseAssignmentById,
  createCaseAssignment,
  updateCaseAssignment,
  deleteCaseAssignment,
} from "../controllers/caseAssignmentController.js";

const router = express.Router();

router.get("/", getCaseAssignments);
router.get("/:id", getCaseAssignmentById);
router.post("/", createCaseAssignment);
router.put("/:id", updateCaseAssignment);
router.delete("/:id", deleteCaseAssignment);

export default router;
