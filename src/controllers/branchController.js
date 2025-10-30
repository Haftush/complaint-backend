import { Branch, User, Complaint } from "../models/index.js";

// Get all branches
export const getBranches = async (req, res) => {
  try {
    const branches = await Branch.findAll();
    res.json({ success: true, data: branches });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get branch by ID
export const getBranchById = async (req, res) => {
  try {
    const branch = await Branch.findByPk(req.params.id, {
      include: [
        { model: User, as: "users" },
        { model: Complaint, as: "complaints" },
      ],
    });

    if (!branch) {
      return res
        .status(404)
        .json({ success: false, error: "Branch not found" });
    }

    res.json({ success: true, data: branch });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Create new branch
export const createBranch = async (req, res) => {
  try {
    const branch = await Branch.create(req.body);
    res.status(201).json({ success: true, data: branch });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update branch
export const updateBranch = async (req, res) => {
  try {
    const branch = await Branch.findByPk(req.params.id);
    if (!branch) {
      return res
        .status(404)
        .json({ success: false, error: "Branch not found" });
    }

    await branch.update(req.body);
    res.json({ success: true, data: branch });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete branch
export const deleteBranch = async (req, res) => {
  try {
    const branch = await Branch.findByPk(req.params.id);
    if (!branch) {
      return res
        .status(404)
        .json({ success: false, error: "Branch not found" });
    }

    await branch.destroy();
    res.json({ success: true, message: "Branch deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
