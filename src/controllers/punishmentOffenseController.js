import { PunishmentOffense, DisciplinaryRecord } from "../models/index.js";

export const getPunishmentOffenses = async (req, res) => {
  try {
    const offenses = await PunishmentOffense.findAll({
      include: [{ model: DisciplinaryRecord, as: "disciplinary_records" }],
    });
    res.json({ success: true, data: offenses });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getPunishmentOffenseById = async (req, res) => {
  try {
    const offense = await PunishmentOffense.findByPk(req.params.id, {
      include: [{ model: DisciplinaryRecord, as: "disciplinary_records" }],
    });

    if (!offense) {
      return res
        .status(404)
        .json({ success: false, error: "Punishment offense not found" });
    }

    res.json({ success: true, data: offense });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const createPunishmentOffense = async (req, res) => {
  try {
    const offense = await PunishmentOffense.create(req.body);
    res.status(201).json({ success: true, data: offense });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const updatePunishmentOffense = async (req, res) => {
  try {
    const offense = await PunishmentOffense.findByPk(req.params.id);
    if (!offense) {
      return res
        .status(404)
        .json({ success: false, error: "Punishment offense not found" });
    }

    await offense.update(req.body);
    res.json({ success: true, data: offense });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const deletePunishmentOffense = async (req, res) => {
  try {
    const offense = await PunishmentOffense.findByPk(req.params.id);
    if (!offense) {
      return res
        .status(404)
        .json({ success: false, error: "Punishment offense not found" });
    }

    await offense.destroy();
    res.json({
      success: true,
      message: "Punishment offense deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
