import { DataTypes } from "sequelize";
import { BaseModel } from "./BaseModel.js";

const DisciplinaryRecord = BaseModel.init("disciplinary_records", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  case_id: {
    type: DataTypes.INTEGER,
  },
  employee_id: {
    type: DataTypes.INTEGER,
  },
  punishment_type_id: {
    type: DataTypes.INTEGER,
  },
  action_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  remarks: {
    type: DataTypes.TEXT,
  },
});

export default DisciplinaryRecord;
