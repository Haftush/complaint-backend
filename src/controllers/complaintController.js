import { Complaint, Branch, DocumentsStore, Case } from "../models/index.js";

// Get all complaints
export const getComplaints = async (req, res) => {
  try {
    const { page = 1, limit = 10, branch_id, category } = req.query;
    const offset = (page - 1) * limit;

    const where = {};
    if (branch_id) where.branch_id = branch_id;
    if (category) where.complaints_category = category;

    const complaints = await Complaint.findAndCountAll({
      where,
      include: [
        { model: Branch, as: "branch" },
        { model: DocumentsStore, as: "documents" },
        { model: Case, as: "cases" },
      ],
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [["created_at", "DESC"]],
    });

    res.json({
      success: true,
      data: complaints.rows,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: complaints.count,
        pages: Math.ceil(complaints.count / limit),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get complaint by ID
export const getComplaintById = async (req, res) => {
  try {
    const complaint = await Complaint.findByPk(req.params.id, {
      include: [
        { model: Branch, as: "branch" },
        { model: DocumentsStore, as: "documents" },
        { model: Case, as: "cases" },
      ],
    });

    if (!complaint) {
      return res
        .status(404)
        .json({ success: false, error: "Complaint not found" });
    }

    res.json({ success: true, data: complaint });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Create new complaint
export const createComplaint = async (req, res) => {
  try {
    // Generate unique complaint ID
    const complaintId = `COMP-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}`;
    const complaintData = {
      ...req.body,
      complaints_id: complaintId,
    };

    const complaint = await Complaint.create(complaintData);
    const complaintWithDetails = await Complaint.findByPk(complaint.id, {
      include: [
        { model: Branch, as: "branch" },
        { model: DocumentsStore, as: "documents" },
      ],
    });

    res.status(201).json({ success: true, data: complaintWithDetails });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update complaint
export const updateComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findByPk(req.params.id);
    if (!complaint) {
      return res
        .status(404)
        .json({ success: false, error: "Complaint not found" });
    }

    await complaint.update(req.body);
    const updatedComplaint = await Complaint.findByPk(complaint.id, {
      include: [
        { model: Branch, as: "branch" },
        { model: DocumentsStore, as: "documents" },
      ],
    });

    res.json({ success: true, data: updatedComplaint });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete complaint
export const deleteComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findByPk(req.params.id);
    if (!complaint) {
      return res
        .status(404)
        .json({ success: false, error: "Complaint not found" });
    }

    await complaint.destroy();
    res.json({ success: true, message: "Complaint deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get complaints by branch
export const getComplaintsByBranch = async (req, res) => {
  try {
    const complaints = await Complaint.findAll({
      where: { branch_id: req.params.branchId },
      include: [
        { model: Branch, as: "branch" },
        { model: Case, as: "cases" },
      ],
      order: [["created_at", "DESC"]],
    });

    res.json({ success: true, data: complaints });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
