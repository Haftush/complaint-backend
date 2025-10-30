import express from "express";
import {
  getPropertyRecords,
  getPropertyRecordById,
  createPropertyRecord,
  updatePropertyRecord,
  deletePropertyRecord,
} from "../controllers/propertyRecordController.js";

const router = express.Router();

router.get("/", getPropertyRecords);
router.get("/:id", getPropertyRecordById);
router.post("/", createPropertyRecord);
router.put("/:id", updatePropertyRecord);
router.delete("/:id", deletePropertyRecord);

export default router;
