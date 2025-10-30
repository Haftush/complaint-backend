import express from "express";
import {
  getDisciplinaryRecords,
  getDisciplinaryRecordById,
  createDisciplinaryRecord,
  updateDisciplinaryRecord,
  deleteDisciplinaryRecord,
} from "../controllers/disciplinaryRecordController.js";

const router = express.Router();

router.get("/", getDisciplinaryRecords);
router.get("/:id", getDisciplinaryRecordById);
router.post("/", createDisciplinaryRecord);
router.put("/:id", updateDisciplinaryRecord);
router.delete("/:id", deleteDisciplinaryRecord);

export default router;
