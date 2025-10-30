import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

export class BaseModel {
  static init(tableName, attributes, options = {}) {
    return sequelize.define(tableName, attributes, {
      tableName: tableName.toLowerCase(),
      timestamps: false,
      ...options,
    });
  }
}
