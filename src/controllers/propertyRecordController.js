import { PropertyRecord, Case } from "../models/index.js";

export const getPropertyRecords = async (req, res) => {
  try {
    const records = await PropertyRecord.findAll({
      include: [{ model: Case, as: "case" }],
      order: [["registration_date", "DESC"]],
    });
    res.json({ success: true, data: records });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getPropertyRecordById = async (req, res) => {
  try {
    const record = await PropertyRecord.findByPk(req.params.id, {
      include: [{ model: Case, as: "case" }],
    });

    if (!record) {
      return res
        .status(404)
        .json({ success: false, error: "Property record not found" });
    }

    res.json({ success: true, data: record });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const createPropertyRecord = async (req, res) => {
  try {
    const record = await PropertyRecord.create(req.body);
    const recordWithDetails = await PropertyRecord.findByPk(record.id, {
      include: [{ model: Case, as: "case" }],
    });

    res.status(201).json({ success: true, data: recordWithDetails });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const updatePropertyRecord = async (req, res) => {
  try {
    const record = await PropertyRecord.findByPk(req.params.id);
    if (!record) {
      return res
        .status(404)
        .json({ success: false, error: "Property record not found" });
    }

    await record.update(req.body);
    const updatedRecord = await PropertyRecord.findByPk(record.id, {
      include: [{ model: Case, as: "case" }],
    });

    res.json({ success: true, data: updatedRecord });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const deletePropertyRecord = async (req, res) => {
  try {
    const record = await PropertyRecord.findByPk(req.params.id);
    if (!record) {
      return res
        .status(404)
        .json({ success: false, error: "Property record not found" });
    }

    await record.destroy();
    res.json({
      success: true,
      message: "Property record deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
