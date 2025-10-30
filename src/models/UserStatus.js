import { DataTypes } from "sequelize";
import { BaseModel } from "./BaseModel.js";

const UserStatus = BaseModel.init("user_statuses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  status_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING(255),
  },
});

export default UserStatus;
