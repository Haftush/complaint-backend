import { DataTypes } from "sequelize";
import { BaseModel } from "./BaseModel.js";

const CaseHistory = BaseModel.init("case_history", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  case_id: {
    type: DataTypes.INTEGER,
  },
  change_log: {
    type: DataTypes.TEXT,
  },
  changed_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  changed_by: {
    type: DataTypes.INTEGER,
  },
});

export default CaseHistory;
