import { Notification, User } from "../models/index.js";

export const getNotifications = async (req, res) => {
  try {
    const { user_id, is_read } = req.query;
    const where = {};

    if (user_id) where.user_id = user_id;
    if (is_read !== undefined) where.is_read = is_read === "true";

    const notifications = await Notification.findAll({
      where,
      include: [{ model: User, as: "user" }],
      order: [["created_at", "DESC"]],
    });
    res.json({ success: true, data: notifications });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getNotificationById = async (req, res) => {
  try {
    const notification = await Notification.findByPk(req.params.id, {
      include: [{ model: User, as: "user" }],
    });

    if (!notification) {
      return res
        .status(404)
        .json({ success: false, error: "Notification not found" });
    }

    res.json({ success: true, data: notification });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const createNotification = async (req, res) => {
  try {
    const notification = await Notification.create(req.body);
    const notificationWithDetails = await Notification.findByPk(
      notification.id,
      {
        include: [{ model: User, as: "user" }],
      }
    );

    res.status(201).json({ success: true, data: notificationWithDetails });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const updateNotification = async (req, res) => {
  try {
    const notification = await Notification.findByPk(req.params.id);
    if (!notification) {
      return res
        .status(404)
        .json({ success: false, error: "Notification not found" });
    }

    await notification.update(req.body);
    const updatedNotification = await Notification.findByPk(notification.id, {
      include: [{ model: User, as: "user" }],
    });

    res.json({ success: true, data: updatedNotification });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const deleteNotification = async (req, res) => {
  try {
    const notification = await Notification.findByPk(req.params.id);
    if (!notification) {
      return res
        .status(404)
        .json({ success: false, error: "Notification not found" });
    }

    await notification.destroy();
    res.json({ success: true, message: "Notification deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const markAsRead = async (req, res) => {
  try {
    const notification = await Notification.findByPk(req.params.id);
    if (!notification) {
      return res
        .status(404)
        .json({ success: false, error: "Notification not found" });
    }

    await notification.update({ is_read: true });
    res.json({ success: true, message: "Notification marked as read" });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
