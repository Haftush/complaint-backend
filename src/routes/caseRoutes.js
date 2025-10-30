import express from "express";
import {
  getCases,
  getCaseById,
  createCase,
  updateCase,
  deleteCase,
  updateCaseStatus,
} from "../controllers/caseController.js";

const router = express.Router();

router.get("/", getCases);
router.get("/:id", getCaseById);
router.post("/", createCase);
router.put("/:id", updateCase);
router.delete("/:id", deleteCase);
router.patch("/:id/status", updateCaseStatus);

export default router;
