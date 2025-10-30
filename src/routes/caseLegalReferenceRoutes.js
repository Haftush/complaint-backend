import express from "express";
import {
  getCaseLegalReferences,
  getCaseLegalReferenceById,
  createCaseLegalReference,
  updateCaseLegalReference,
  deleteCaseLegalReference,
} from "../controllers/caseLegalReferenceController.js";

const router = express.Router();

router.get("/", getCaseLegalReferences);
router.get("/:id", getCaseLegalReferenceById);
router.post("/", createCaseLegalReference);
router.put("/:id", updateCaseLegalReference);
router.delete("/:id", deleteCaseLegalReference);

export default router;
