import { DataTypes } from "sequelize";
import { BaseModel } from "./BaseModel.js";

const Branch = BaseModel.init("branches", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  branch_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  region: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

export default Branch;
