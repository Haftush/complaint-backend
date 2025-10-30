import { DataTypes } from "sequelize";
import { BaseModel } from "./BaseModel.js";

const CaseAssignment = BaseModel.init("case_assignments", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  case_id: {
    type: DataTypes.INTEGER,
  },
  officer_id: {
    type: DataTypes.INTEGER,
  },
  assigned_by: {
    type: DataTypes.INTEGER,
  },
  assigned_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  team_id: {
    type: DataTypes.INTEGER,
  },
});

export default CaseAssignment;
