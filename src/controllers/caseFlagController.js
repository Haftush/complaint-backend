import { CaseFlag, Case } from "../models/index.js";

export const getCaseFlags = async (req, res) => {
  try {
    const flags = await CaseFlag.findAll({
      include: [{ model: Case, as: "case" }],
      order: [["id", "DESC"]],
    });
    res.json({ success: true, data: flags });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getCaseFlagById = async (req, res) => {
  try {
    const flag = await CaseFlag.findByPk(req.params.id, {
      include: [{ model: Case, as: "case" }],
    });

    if (!flag) {
      return res
        .status(404)
        .json({ success: false, error: "Case flag not found" });
    }

    res.json({ success: true, data: flag });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const createCaseFlag = async (req, res) => {
  try {
    const flag = await CaseFlag.create(req.body);
    const flagWithDetails = await CaseFlag.findByPk(flag.id, {
      include: [{ model: Case, as: "case" }],
    });

    res.status(201).json({ success: true, data: flagWithDetails });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const updateCaseFlag = async (req, res) => {
  try {
    const flag = await CaseFlag.findByPk(req.params.id);
    if (!flag) {
      return res
        .status(404)
        .json({ success: false, error: "Case flag not found" });
    }

    await flag.update(req.body);
    const updatedFlag = await CaseFlag.findByPk(flag.id, {
      include: [{ model: Case, as: "case" }],
    });

    res.json({ success: true, data: updatedFlag });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const deleteCaseFlag = async (req, res) => {
  try {
    const flag = await CaseFlag.findByPk(req.params.id);
    if (!flag) {
      return res
        .status(404)
        .json({ success: false, error: "Case flag not found" });
    }

    await flag.destroy();
    res.json({ success: true, message: "Case flag deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
