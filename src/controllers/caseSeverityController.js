import { CaseSeverity, Case } from "../models/index.js";

export const getCaseSeverities = async (req, res) => {
  try {
    const severities = await CaseSeverity.findAll({
      include: [{ model: Case, as: "cases" }],
    });
    res.json({ success: true, data: severities });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getCaseSeverityById = async (req, res) => {
  try {
    const severity = await CaseSeverity.findByPk(req.params.id, {
      include: [{ model: Case, as: "cases" }],
    });

    if (!severity) {
      return res
        .status(404)
        .json({ success: false, error: "Case severity not found" });
    }

    res.json({ success: true, data: severity });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const createCaseSeverity = async (req, res) => {
  try {
    const severity = await CaseSeverity.create(req.body);
    res.status(201).json({ success: true, data: severity });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const updateCaseSeverity = async (req, res) => {
  try {
    const severity = await CaseSeverity.findByPk(req.params.id);
    if (!severity) {
      return res
        .status(404)
        .json({ success: false, error: "Case severity not found" });
    }

    await severity.update(req.body);
    res.json({ success: true, data: severity });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const deleteCaseSeverity = async (req, res) => {
  try {
    const severity = await CaseSeverity.findByPk(req.params.id);
    if (!severity) {
      return res
        .status(404)
        .json({ success: false, error: "Case severity not found" });
    }

    await severity.destroy();
    res.json({ success: true, message: "Case severity deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
