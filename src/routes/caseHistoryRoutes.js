import express from "express";
import {
  getCaseHistories,
  getCaseHistoryById,
  createCaseHistory,
  getCaseHistoryByCaseId,
} from "../controllers/caseHistoryController.js";

const router = express.Router();

router.get("/", getCaseHistories);
router.get("/:id", getCaseHistoryById);
router.post("/", createCaseHistory);
router.get("/case/:caseId", getCaseHistoryByCaseId);

export default router;
