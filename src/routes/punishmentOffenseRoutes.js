import express from "express";
import {
  getPunishmentOffenses,
  getPunishmentOffenseById,
  createPunishmentOffense,
  updatePunishmentOffense,
  deletePunishmentOffense,
} from "../controllers/punishmentOffenseController.js";

const router = express.Router();

router.get("/", getPunishmentOffenses);
router.get("/:id", getPunishmentOffenseById);
router.post("/", createPunishmentOffense);
router.put("/:id", updatePunishmentOffense);
router.delete("/:id", deletePunishmentOffense);

export default router;
