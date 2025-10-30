import { UserRole, User } from "../models/index.js";

export const getUserRoles = async (req, res) => {
  try {
    const roles = await UserRole.findAll({
      include: [{ model: User, as: "users" }],
    });
    res.json({ success: true, data: roles });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getUserRoleById = async (req, res) => {
  try {
    const role = await UserRole.findByPk(req.params.id, {
      include: [{ model: User, as: "users" }],
    });

    if (!role) {
      return res
        .status(404)
        .json({ success: false, error: "User role not found" });
    }

    res.json({ success: true, data: role });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const createUserRole = async (req, res) => {
  try {
    const role = await UserRole.create(req.body);
    res.status(201).json({ success: true, data: role });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const updateUserRole = async (req, res) => {
  try {
    const role = await UserRole.findByPk(req.params.id);
    if (!role) {
      return res
        .status(404)
        .json({ success: false, error: "User role not found" });
    }

    await role.update(req.body);
    res.json({ success: true, data: role });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const deleteUserRole = async (req, res) => {
  try {
    const role = await UserRole.findByPk(req.params.id);
    if (!role) {
      return res
        .status(404)
        .json({ success: false, error: "User role not found" });
    }

    await role.destroy();
    res.json({ success: true, message: "User role deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
