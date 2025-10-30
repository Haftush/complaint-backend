import { DataTypes } from "sequelize";
import { BaseModel } from "./BaseModel.js";

const PunishmentOffense = BaseModel.init("punishment_offenses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING(255),
  },
  category: {
    type: DataTypes.STRING(100),
  },
});

export default PunishmentOffense;
