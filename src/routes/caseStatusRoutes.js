import express from "express";
import {
  getCaseStatuses,
  getCaseStatusById,
  createCaseStatus,
  updateCaseStatus,
  deleteCaseStatus,
} from "../controllers/caseStatusController.js";

const router = express.Router();

router.get("/", getCaseStatuses);
router.get("/:id", getCaseStatusById);
router.post("/", createCaseStatus);
router.put("/:id", updateCaseStatus);
router.delete("/:id", deleteCaseStatus);

export default router;
