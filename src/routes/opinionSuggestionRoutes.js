import express from "express";
import {
  getOpinionSuggestions,
  getOpinionSuggestionById,
  createOpinionSuggestion,
  updateOpinionSuggestion,
  deleteOpinionSuggestion,
} from "../controllers/opinionSuggestionController.js";

const router = express.Router();

router.get("/", getOpinionSuggestions);
router.get("/:id", getOpinionSuggestionById);
router.post("/", createOpinionSuggestion);
router.put("/:id", updateOpinionSuggestion);
router.delete("/:id", deleteOpinionSuggestion);

export default router;
