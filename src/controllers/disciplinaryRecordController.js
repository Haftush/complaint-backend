import {
  DisciplinaryRecord,
  Case,
  PunishmentOffense,
} from "../models/index.js";

export const getDisciplinaryRecords = async (req, res) => {
  try {
    const records = await DisciplinaryRecord.findAll({
      include: [
        { model: Case, as: "case" },
        { model: PunishmentOffense, as: "punishment_type" },
      ],
      order: [["action_date", "DESC"]],
    });
    res.json({ success: true, data: records });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getDisciplinaryRecordById = async (req, res) => {
  try {
    const record = await DisciplinaryRecord.findByPk(req.params.id, {
      include: [
        { model: Case, as: "case" },
        { model: PunishmentOffense, as: "punishment_type" },
      ],
    });

    if (!record) {
      return res
        .status(404)
        .json({ success: false, error: "Disciplinary record not found" });
    }

    res.json({ success: true, data: record });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const createDisciplinaryRecord = async (req, res) => {
  try {
    const record = await DisciplinaryRecord.create(req.body);
    const recordWithDetails = await DisciplinaryRecord.findByPk(record.id, {
      include: [
        { model: Case, as: "case" },
        { model: PunishmentOffense, as: "punishment_type" },
      ],
    });

    res.status(201).json({ success: true, data: recordWithDetails });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const updateDisciplinaryRecord = async (req, res) => {
  try {
    const record = await DisciplinaryRecord.findByPk(req.params.id);
    if (!record) {
      return res
        .status(404)
        .json({ success: false, error: "Disciplinary record not found" });
    }

    await record.update(req.body);
    const updatedRecord = await DisciplinaryRecord.findByPk(record.id, {
      include: [
        { model: Case, as: "case" },
        { model: PunishmentOffense, as: "punishment_type" },
      ],
    });

    res.json({ success: true, data: updatedRecord });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const deleteDisciplinaryRecord = async (req, res) => {
  try {
    const record = await DisciplinaryRecord.findByPk(req.params.id);
    if (!record) {
      return res
        .status(404)
        .json({ success: false, error: "Disciplinary record not found" });
    }

    await record.destroy();
    res.json({
      success: true,
      message: "Disciplinary record deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
