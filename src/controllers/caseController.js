import {
  Case,
  Complaint,
  User,
  CaseStatus,
  CaseSeverity,
  Branch,
  DisciplinaryRecord,
} from "../models/index.js";

// Get all cases
export const getCases = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      status_id,
      severity_id,
      branch_id,
    } = req.query;
    const offset = (page - 1) * limit;

    const where = {};
    if (status_id) where.status_id = status_id;
    if (severity_id) where.severity_id = severity_id;
    if (branch_id) where.branch_id = branch_id;

    const cases = await Case.findAndCountAll({
      where,
      include: [
        { model: Complaint, as: "complaint" },
        { model: User, as: "assigned_officer" },
        { model: User, as: "investigator" },
        { model: CaseStatus, as: "status" },
        { model: CaseSeverity, as: "severity" },
        { model: Branch, as: "branch" },
        { model: DisciplinaryRecord, as: "disciplinary_records" },
      ],
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [["case_filed_date", "DESC"]],
    });

    res.json({
      success: true,
      data: cases.rows,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: cases.count,
        pages: Math.ceil(cases.count / limit),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get case by ID
export const getCaseById = async (req, res) => {
  try {
    const caseRecord = await Case.findByPk(req.params.id, {
      include: [
        { model: Complaint, as: "complaint" },
        { model: User, as: "assigned_officer" },
        { model: User, as: "investigator" },
        { model: User, as: "assessor" },
        { model: CaseStatus, as: "status" },
        { model: CaseSeverity, as: "severity" },
        { model: Branch, as: "branch" },
        { model: DisciplinaryRecord, as: "disciplinary_records" },
      ],
    });

    if (!caseRecord) {
      return res.status(404).json({ success: false, error: "Case not found" });
    }

    res.json({ success: true, data: caseRecord });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Create new case
export const createCase = async (req, res) => {
  try {
    const caseData = {
      ...req.body,
      case_filed_date: req.body.case_filed_date || new Date(),
    };

    const caseRecord = await Case.create(caseData);
    const caseWithDetails = await Case.findByPk(caseRecord.id, {
      include: [
        { model: Complaint, as: "complaint" },
        { model: User, as: "assigned_officer" },
        { model: CaseStatus, as: "status" },
        { model: CaseSeverity, as: "severity" },
      ],
    });

    res.status(201).json({ success: true, data: caseWithDetails });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update case
export const updateCase = async (req, res) => {
  try {
    const caseRecord = await Case.findByPk(req.params.id);
    if (!caseRecord) {
      return res.status(404).json({ success: false, error: "Case not found" });
    }

    await caseRecord.update(req.body);
    const updatedCase = await Case.findByPk(caseRecord.id, {
      include: [
        { model: Complaint, as: "complaint" },
        { model: User, as: "assigned_officer" },
        { model: CaseStatus, as: "status" },
        { model: CaseSeverity, as: "severity" },
      ],
    });

    res.json({ success: true, data: updatedCase });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete case
export const deleteCase = async (req, res) => {
  try {
    const caseRecord = await Case.findByPk(req.params.id);
    if (!caseRecord) {
      return res.status(404).json({ success: false, error: "Case not found" });
    }

    await caseRecord.destroy();
    res.json({ success: true, message: "Case deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update case status
export const updateCaseStatus = async (req, res) => {
  try {
    const { status_id, notes } = req.body;
    const caseRecord = await Case.findByPk(req.params.id);

    if (!caseRecord) {
      return res.status(404).json({ success: false, error: "Case not found" });
    }

    await caseRecord.update({
      status_id,
      last_change_note: notes,
      last_updated_at: new Date(),
    });

    res.json({ success: true, data: caseRecord });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
