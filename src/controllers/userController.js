import { User, UserRole, UserStatus, Branch } from "../models/index.js";

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [
        { model: UserRole, as: "role" },
        { model: UserStatus, as: "status" },
        { model: Branch, as: "branch" },
      ],
    });
    res.json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [
        { model: UserRole, as: "role" },
        { model: UserStatus, as: "status" },
        { model: Branch, as: "branch" },
      ],
    });

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Create new user
export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const userWithDetails = await User.findByPk(user.id, {
      include: [
        { model: UserRole, as: "role" },
        { model: UserStatus, as: "status" },
        { model: Branch, as: "branch" },
      ],
    });
    res.status(201).json({ success: true, data: userWithDetails });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update user
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    await user.update(req.body);
    const updatedUser = await User.findByPk(user.id, {
      include: [
        { model: UserRole, as: "role" },
        { model: UserStatus, as: "status" },
        { model: Branch, as: "branch" },
      ],
    });

    res.json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    await user.destroy();
    res.json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
