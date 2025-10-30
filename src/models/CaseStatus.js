import { DataTypes } from "sequelize";
import { BaseModel } from "./BaseModel.js";

const CaseStatus = BaseModel.init("case_statuses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  status_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING(255),
  },
});

export default CaseStatus;
