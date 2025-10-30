import { DataTypes } from "sequelize";
import { BaseModel } from "./BaseModel.js";

const ComplaintTransfer = BaseModel.init("complaint_transfers", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  complaint_id: {
    type: DataTypes.INTEGER,
  },
  from_branch_id: {
    type: DataTypes.INTEGER,
  },
  to_branch_id: {
    type: DataTypes.INTEGER,
  },
  transfer_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  reason: {
    type: DataTypes.TEXT,
  },
});

export default ComplaintTransfer;
