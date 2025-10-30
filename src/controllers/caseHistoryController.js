import { CaseHistory, Case, User } from "../models/index.js";

export const getCaseHistories = async (req, res) => {
  try {
    const histories = await CaseHistory.findAll({
      include: [
        { model: Case, as: "case" },
        { model: User, as: "changer" },
      ],
      order: [["changed_at", "DESC"]],
    });
    res.json({ success: true, data: histories });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getCaseHistoryById = async (req, res) => {
  try {
    const history = await CaseHistory.findByPk(req.params.id, {
      include: [
        { model: Case, as: "case" },
        { model: User, as: "changer" },
      ],
    });

    if (!history) {
      return res
        .status(404)
        .json({ success: false, error: "Case history not found" });
    }

    res.json({ success: true, data: history });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const createCaseHistory = async (req, res) => {
  try {
    const history = await CaseHistory.create(req.body);
    const historyWithDetails = await CaseHistory.findByPk(history.id, {
      include: [
        { model: Case, as: "case" },
        { model: User, as: "changer" },
      ],
    });

    res.status(201).json({ success: true, data: historyWithDetails });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const getCaseHistoryByCaseId = async (req, res) => {
  try {
    const histories = await CaseHistory.findAll({
      where: { case_id: req.params.caseId },
      include: [
        { model: Case, as: "case" },
        { model: User, as: "changer" },
      ],
      order: [["changed_at", "DESC"]],
    });

    res.json({ success: true, data: histories });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
