import { CaseAssignment, Case, User } from "../models/index.js";

export const getCaseAssignments = async (req, res) => {
  try {
    const assignments = await CaseAssignment.findAll({
      include: [
        { model: Case, as: "case" },
        { model: User, as: "officer" },
        { model: User, as: "assigner" },
      ],
      order: [["assigned_date", "DESC"]],
    });
    res.json({ success: true, data: assignments });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getCaseAssignmentById = async (req, res) => {
  try {
    const assignment = await CaseAssignment.findByPk(req.params.id, {
      include: [
        { model: Case, as: "case" },
        { model: User, as: "officer" },
        { model: User, as: "assigner" },
      ],
    });

    if (!assignment) {
      return res
        .status(404)
        .json({ success: false, error: "Case assignment not found" });
    }

    res.json({ success: true, data: assignment });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const createCaseAssignment = async (req, res) => {
  try {
    const assignment = await CaseAssignment.create(req.body);
    const assignmentWithDetails = await CaseAssignment.findByPk(assignment.id, {
      include: [
        { model: Case, as: "case" },
        { model: User, as: "officer" },
        { model: User, as: "assigner" },
      ],
    });

    res.status(201).json({ success: true, data: assignmentWithDetails });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const updateCaseAssignment = async (req, res) => {
  try {
    const assignment = await CaseAssignment.findByPk(req.params.id);
    if (!assignment) {
      return res
        .status(404)
        .json({ success: false, error: "Case assignment not found" });
    }

    await assignment.update(req.body);
    const updatedAssignment = await CaseAssignment.findByPk(assignment.id, {
      include: [
        { model: Case, as: "case" },
        { model: User, as: "officer" },
        { model: User, as: "assigner" },
      ],
    });

    res.json({ success: true, data: updatedAssignment });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const deleteCaseAssignment = async (req, res) => {
  try {
    const assignment = await CaseAssignment.findByPk(req.params.id);
    if (!assignment) {
      return res
        .status(404)
        .json({ success: false, error: "Case assignment not found" });
    }

    await assignment.destroy();
    res.json({
      success: true,
      message: "Case assignment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
