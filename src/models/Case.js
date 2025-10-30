import { DataTypes } from "sequelize";
import { BaseModel } from "./BaseModel.js";

const Case = BaseModel.init(
  "cases",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    complaint_id: {
      type: DataTypes.INTEGER,
    },
    document_id: {
      type: DataTypes.INTEGER,
    },
    defendant_name: {
      type: DataTypes.STRING(100),
    },
    branch_id: {
      type: DataTypes.INTEGER,
    },
    position: {
      type: DataTypes.STRING(100),
    },
    offense_summary: {
      type: DataTypes.TEXT,
    },
    case_filed_date: {
      type: DataTypes.DATE,
    },
    decision: {
      type: DataTypes.TEXT,
    },
    decision_date: {
      type: DataTypes.DATE,
    },
    appeal_requested_date: {
      type: DataTypes.DATE,
    },
    appeal_decision: {
      type: DataTypes.TEXT,
    },
    appeal_decision_date: {
      type: DataTypes.DATE,
    },
    assigned_officer_id: {
      type: DataTypes.INTEGER,
    },
    document_path: {
      type: DataTypes.STRING(500),
    },
    status_id: {
      type: DataTypes.INTEGER,
    },
    severity_id: {
      type: DataTypes.INTEGER,
    },
    risk_approval_status_id: {
      type: DataTypes.INTEGER,
    },
    last_change_type: {
      type: DataTypes.STRING(100),
    },
    last_changed_by: {
      type: DataTypes.INTEGER,
    },
    last_updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    last_change_note: {
      type: DataTypes.TEXT,
    },
    investigator_id: {
      type: DataTypes.INTEGER,
    },
    investigation_notes: {
      type: DataTypes.TEXT,
    },
    investigation_start_date: {
      type: DataTypes.DATE,
    },
    investigation_end_date: {
      type: DataTypes.DATE,
    },
    investigation_outcome: {
      type: DataTypes.TEXT,
    },
    assessment_notes: {
      type: DataTypes.TEXT,
    },
    assessment_date: {
      type: DataTypes.DATE,
    },
    assessed_by: {
      type: DataTypes.INTEGER,
    },
    original_case_id: {
      type: DataTypes.INTEGER,
    },
    reopened_date: {
      type: DataTypes.DATE,
    },
    reopened_reason: {
      type: DataTypes.TEXT,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["complaint_id", "case_filed_date"],
      },
    ],
  }
);

export default Case;
