import { DataTypes } from "sequelize";
import { BaseModel } from "./BaseModel.js";

const UserRole = BaseModel.init("user_roles", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  role_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING(255),
  },
  module: {
    type: DataTypes.STRING(100),
  },
  can_view: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  can_edit: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  can_delete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default UserRole;
