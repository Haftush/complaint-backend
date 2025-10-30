import express from "express";
import {
  getCaseFlags,
  getCaseFlagById,
  createCaseFlag,
  updateCaseFlag,
  deleteCaseFlag,
} from "../controllers/caseFlagController.js";

const router = express.Router();

router.get("/", getCaseFlags);
router.get("/:id", getCaseFlagById);
router.post("/", createCaseFlag);
router.put("/:id", updateCaseFlag);
router.delete("/:id", deleteCaseFlag);

export default router;
