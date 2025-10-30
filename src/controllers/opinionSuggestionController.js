import { OpinionSuggestion, User, Case } from "../models/index.js";

export const getOpinionSuggestions = async (req, res) => {
  try {
    const opinions = await OpinionSuggestion.findAll({
      include: [
        { model: User, as: "user" },
        { model: Case, as: "case" },
      ],
      order: [["submitted_at", "DESC"]],
    });
    res.json({ success: true, data: opinions });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getOpinionSuggestionById = async (req, res) => {
  try {
    const opinion = await OpinionSuggestion.findByPk(req.params.id, {
      include: [
        { model: User, as: "user" },
        { model: Case, as: "case" },
      ],
    });

    if (!opinion) {
      return res
        .status(404)
        .json({ success: false, error: "Opinion/suggestion not found" });
    }

    res.json({ success: true, data: opinion });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const createOpinionSuggestion = async (req, res) => {
  try {
    const opinion = await OpinionSuggestion.create(req.body);
    const opinionWithDetails = await OpinionSuggestion.findByPk(opinion.id, {
      include: [
        { model: User, as: "user" },
        { model: Case, as: "case" },
      ],
    });

    res.status(201).json({ success: true, data: opinionWithDetails });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const updateOpinionSuggestion = async (req, res) => {
  try {
    const opinion = await OpinionSuggestion.findByPk(req.params.id);
    if (!opinion) {
      return res
        .status(404)
        .json({ success: false, error: "Opinion/suggestion not found" });
    }

    await opinion.update(req.body);
    const updatedOpinion = await OpinionSuggestion.findByPk(opinion.id, {
      include: [
        { model: User, as: "user" },
        { model: Case, as: "case" },
      ],
    });

    res.json({ success: true, data: updatedOpinion });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const deleteOpinionSuggestion = async (req, res) => {
  try {
    const opinion = await OpinionSuggestion.findByPk(req.params.id);
    if (!opinion) {
      return res
        .status(404)
        .json({ success: false, error: "Opinion/suggestion not found" });
    }

    await opinion.destroy();
    res.json({
      success: true,
      message: "Opinion/suggestion deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
