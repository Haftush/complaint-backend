import { DataTypes } from "sequelize";
import { BaseModel } from "./BaseModel.js";

const CaseSeverity = BaseModel.init("case_severities", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  severity_level: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING(255),
  },
});

export default CaseSeverity;
