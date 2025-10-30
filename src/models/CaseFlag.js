import { DataTypes } from "sequelize";
import { BaseModel } from "./BaseModel.js";

const CaseFlag = BaseModel.init("case_flags", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  case_id: {
    type: DataTypes.INTEGER,
  },
  flag_type: {
    type: DataTypes.STRING(100),
  },
  description: {
    type: DataTypes.TEXT,
  },
});

export default CaseFlag;
