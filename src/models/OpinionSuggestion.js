import { DataTypes } from "sequelize";
import { BaseModel } from "./BaseModel.js";

const OpinionSuggestion = BaseModel.init("opinions_suggestions", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
  case_id: {
    type: DataTypes.INTEGER,
  },
  feedback: {
    type: DataTypes.TEXT,
  },
  submitted_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default OpinionSuggestion;
