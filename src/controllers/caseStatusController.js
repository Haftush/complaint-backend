import { CaseStatus, Case } from "../models/index.js";

export const getCaseStatuses = async (req, res) => {
  try {
    const statuses = await CaseStatus.findAll({
      include: [{ model: Case, as: "cases" }],
    });
    res.json({ success: true, data: statuses });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getCaseStatusById = async (req, res) => {
  try {
    const status = await CaseStatus.findByPk(req.params.id, {
      include: [{ model: Case, as: "cases" }],
    });

    if (!status) {
      return res
        .status(404)
        .json({ success: false, error: "Case status not found" });
    }

    res.json({ success: true, data: status });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const createCaseStatus = async (req, res) => {
  try {
    const status = await CaseStatus.create(req.body);
    res.status(201).json({ success: true, data: status });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const updateCaseStatus = async (req, res) => {
  try {
    const status = await CaseStatus.findByPk(req.params.id);
    if (!status) {
      return res
        .status(404)
        .json({ success: false, error: "Case status not found" });
    }

    await status.update(req.body);
    res.json({ success: true, data: status });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const deleteCaseStatus = async (req, res) => {
  try {
    const status = await CaseStatus.findByPk(req.params.id);
    if (!status) {
      return res
        .status(404)
        .json({ success: false, error: "Case status not found" });
    }

    await status.destroy();
    res.json({ success: true, message: "Case status deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
