import { ComplaintTransfer, Complaint, Branch } from "../models/index.js";

export const getComplaintTransfers = async (req, res) => {
  try {
    const transfers = await ComplaintTransfer.findAll({
      include: [
        { model: Complaint, as: "complaint" },
        { model: Branch, as: "from_branch" },
        { model: Branch, as: "to_branch" },
      ],
      order: [["transfer_date", "DESC"]],
    });
    res.json({ success: true, data: transfers });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getComplaintTransferById = async (req, res) => {
  try {
    const transfer = await ComplaintTransfer.findByPk(req.params.id, {
      include: [
        { model: Complaint, as: "complaint" },
        { model: Branch, as: "from_branch" },
        { model: Branch, as: "to_branch" },
      ],
    });

    if (!transfer) {
      return res
        .status(404)
        .json({ success: false, error: "Complaint transfer not found" });
    }

    res.json({ success: true, data: transfer });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const createComplaintTransfer = async (req, res) => {
  try {
    const transfer = await ComplaintTransfer.create(req.body);
    const transferWithDetails = await ComplaintTransfer.findByPk(transfer.id, {
      include: [
        { model: Complaint, as: "complaint" },
        { model: Branch, as: "from_branch" },
        { model: Branch, as: "to_branch" },
      ],
    });

    res.status(201).json({ success: true, data: transferWithDetails });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const updateComplaintTransfer = async (req, res) => {
  try {
    const transfer = await ComplaintTransfer.findByPk(req.params.id);
    if (!transfer) {
      return res
        .status(404)
        .json({ success: false, error: "Complaint transfer not found" });
    }

    await transfer.update(req.body);
    const updatedTransfer = await ComplaintTransfer.findByPk(transfer.id, {
      include: [
        { model: Complaint, as: "complaint" },
        { model: Branch, as: "from_branch" },
        { model: Branch, as: "to_branch" },
      ],
    });

    res.json({ success: true, data: updatedTransfer });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const deleteComplaintTransfer = async (req, res) => {
  try {
    const transfer = await ComplaintTransfer.findByPk(req.params.id);
    if (!transfer) {
      return res
        .status(404)
        .json({ success: false, error: "Complaint transfer not found" });
    }

    await transfer.destroy();
    res.json({
      success: true,
      message: "Complaint transfer deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
