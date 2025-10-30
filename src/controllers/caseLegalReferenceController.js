import { CaseLegalReference, Case } from "../models/index.js";

export const getCaseLegalReferences = async (req, res) => {
  try {
    const references = await CaseLegalReference.findAll({
      include: [{ model: Case, as: "case" }],
      order: [["id", "DESC"]],
    });
    res.json({ success: true, data: references });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getCaseLegalReferenceById = async (req, res) => {
  try {
    const reference = await CaseLegalReference.findByPk(req.params.id, {
      include: [{ model: Case, as: "case" }],
    });

    if (!reference) {
      return res
        .status(404)
        .json({ success: false, error: "Case legal reference not found" });
    }

    res.json({ success: true, data: reference });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const createCaseLegalReference = async (req, res) => {
  try {
    const reference = await CaseLegalReference.create(req.body);
    const referenceWithDetails = await CaseLegalReference.findByPk(
      reference.id,
      {
        include: [{ model: Case, as: "case" }],
      }
    );

    res.status(201).json({ success: true, data: referenceWithDetails });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const updateCaseLegalReference = async (req, res) => {
  try {
    const reference = await CaseLegalReference.findByPk(req.params.id);
    if (!reference) {
      return res
        .status(404)
        .json({ success: false, error: "Case legal reference not found" });
    }

    await reference.update(req.body);
    const updatedReference = await CaseLegalReference.findByPk(reference.id, {
      include: [{ model: Case, as: "case" }],
    });

    res.json({ success: true, data: updatedReference });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const deleteCaseLegalReference = async (req, res) => {
  try {
    const reference = await CaseLegalReference.findByPk(req.params.id);
    if (!reference) {
      return res
        .status(404)
        .json({ success: false, error: "Case legal reference not found" });
    }

    await reference.destroy();
    res.json({
      success: true,
      message: "Case legal reference deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
