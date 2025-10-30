import express from "express";
import {
  getCaseSeverities,
  getCaseSeverityById,
  createCaseSeverity,
  updateCaseSeverity,
  deleteCaseSeverity,
} from "../controllers/caseSeverityController.js";

const router = express.Router();

router.get("/", getCaseSeverities);
router.get("/:id", getCaseSeverityById);
router.post("/", createCaseSeverity);
router.put("/:id", updateCaseSeverity);
router.delete("/:id", deleteCaseSeverity);

export default router;
