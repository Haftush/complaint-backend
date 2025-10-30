import { DataTypes } from "sequelize";
import { BaseModel } from "./BaseModel.js";

const PropertyRecord = BaseModel.init("property_records", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  case_id: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.TEXT,
  },
  registered: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  registration_date: {
    type: DataTypes.DATE,
  },
});

export default PropertyRecord;
