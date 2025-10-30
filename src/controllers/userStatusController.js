import { UserStatus, User } from "../models/index.js";

export const getUserStatuses = async (req, res) => {
  try {
    const statuses = await UserStatus.findAll({
      include: [{ model: User, as: "users" }],
    });
    res.json({ success: true, data: statuses });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getUserStatusById = async (req, res) => {
  try {
    const status = await UserStatus.findByPk(req.params.id, {
      include: [{ model: User, as: "users" }],
    });

    if (!status) {
      return res
        .status(404)
        .json({ success: false, error: "User status not found" });
    }

    res.json({ success: true, data: status });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const createUserStatus = async (req, res) => {
  try {
    const status = await UserStatus.create(req.body);
    res.status(201).json({ success: true, data: status });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const updateUserStatus = async (req, res) => {
  try {
    const status = await UserStatus.findByPk(req.params.id);
    if (!status) {
      return res
        .status(404)
        .json({ success: false, error: "User status not found" });
    }

    await status.update(req.body);
    res.json({ success: true, data: status });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const deleteUserStatus = async (req, res) => {
  try {
    const status = await UserStatus.findByPk(req.params.id);
    if (!status) {
      return res
        .status(404)
        .json({ success: false, error: "User status not found" });
    }

    await status.destroy();
    res.json({ success: true, message: "User status deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
