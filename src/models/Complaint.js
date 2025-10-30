import { DataTypes } from "sequelize";
import { BaseModel } from "./BaseModel.js";

const Complaint = BaseModel.init("complaints", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  complainant_name: {
    type: DataTypes.STRING(100),
  },
  complainant_org_name: {
    type: DataTypes.STRING(100),
  },
  complainant_phone: {
    type: DataTypes.STRING(20),
  },
  complainant_email: {
    type: DataTypes.STRING(100),
  },
  complainant_region: {
    type: DataTypes.STRING(100),
  },
  complainant_city: {
    type: DataTypes.STRING(100),
  },
  complainant_zone: {
    type: DataTypes.STRING(100),
  },
  complainant_woreda: {
    type: DataTypes.STRING(100),
  },
  complainant_kebele: {
    type: DataTypes.STRING(100),
  },
  complainant_h_no: {
    type: DataTypes.STRING(100),
  },
  complaints_id: {
    type: DataTypes.STRING(50),
    unique: true,
  },
  complaints_on_name: {
    type: DataTypes.STRING(100),
  },
  complaints_org_name: {
    type: DataTypes.STRING(100),
  },
  complaints_region: {
    type: DataTypes.STRING(100),
  },
  complaints_city: {
    type: DataTypes.STRING(100),
  },
  complaints_zone: {
    type: DataTypes.STRING(100),
  },
  complaints_woreda: {
    type: DataTypes.STRING(100),
  },
  complaints_h_no: {
    type: DataTypes.STRING(100),
  },
  complaints_type: {
    type: DataTypes.STRING(100),
  },
  document_no: {
    type: DataTypes.STRING(50),
  },
  property_found: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  registered_org: {
    type: DataTypes.STRING(100),
  },
  org_region: {
    type: DataTypes.STRING(100),
  },
  org_city: {
    type: DataTypes.STRING(100),
  },
  org_zone: {
    type: DataTypes.STRING(100),
  },
  org_woreda: {
    type: DataTypes.STRING(100),
  },
  org_kebele: {
    type: DataTypes.STRING(100),
  },
  org_block_no: {
    type: DataTypes.STRING(100),
  },
  material_name: {
    type: DataTypes.STRING(100),
  },
  material_region: {
    type: DataTypes.STRING(100),
  },
  material_city: {
    type: DataTypes.STRING(100),
  },
  material_zone: {
    type: DataTypes.STRING(100),
  },
  material_woreda: {
    type: DataTypes.STRING(100),
  },
  material_kebele: {
    type: DataTypes.STRING(100),
  },
  material_block_no: {
    type: DataTypes.STRING(100),
  },
  complaints_details: {
    type: DataTypes.TEXT,
  },
  complaints_category: {
    type: DataTypes.STRING(100),
  },
  location: {
    type: DataTypes.STRING(255),
  },
  branch_id: {
    type: DataTypes.INTEGER,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default Complaint;
