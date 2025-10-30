import Branch from "./Branch.js";
import UserStatus from "./UserStatus.js";
import UserRole from "./UserRole.js";
import User from "./User.js";
import Complaint from "./Complaint.js";
import DocumentsStore from "./DocumentsStore.js";
import ComplaintTransfer from "./ComplaintTransfer.js";
import CaseStatus from "./CaseStatus.js";
import CaseSeverity from "./CaseSeverity.js";
import Case from "./Case.js";
import CaseAssignment from "./CaseAssignment.js";
import CaseFlag from "./CaseFlag.js";
import PunishmentOffense from "./PunishmentOffense.js";
import DisciplinaryRecord from "./DisciplinaryRecord.js";
import OpinionSuggestion from "./OpinionSuggestion.js";
import PropertyRecord from "./PropertyRecord.js";
import Notification from "./Notification.js";
import CaseLegalReference from "./CaseLegalReference.js";
import CaseHistory from "./CaseHistory.js";

const setupAssociations = () => {
  // User Associations
  User.belongsTo(UserRole, { foreignKey: "role_id", as: "role" });
  User.belongsTo(UserStatus, { foreignKey: "status_id", as: "status" });
  User.belongsTo(Branch, { foreignKey: "branch_id", as: "branch" });

  UserRole.hasMany(User, { foreignKey: "role_id", as: "users" });
  UserStatus.hasMany(User, { foreignKey: "status_id", as: "users" });
  Branch.hasMany(User, { foreignKey: "branch_id", as: "users" });

  // Complaint Associations
  Complaint.belongsTo(Branch, { foreignKey: "branch_id", as: "branch" });
  Branch.hasMany(Complaint, { foreignKey: "branch_id", as: "complaints" });

  Complaint.hasMany(DocumentsStore, {
    foreignKey: "complaints_id",
    as: "documents",
  });
  Complaint.hasMany(ComplaintTransfer, {
    foreignKey: "complaint_id",
    as: "transfers",
  });
  Complaint.hasMany(Case, { foreignKey: "complaint_id", as: "cases" });

  // DocumentsStore Associations
  DocumentsStore.belongsTo(Complaint, {
    foreignKey: "complaints_id",
    as: "complaint",
  });

  // ComplaintTransfer Associations
  ComplaintTransfer.belongsTo(Complaint, {
    foreignKey: "complaint_id",
    as: "complaint",
  });
  ComplaintTransfer.belongsTo(Branch, {
    foreignKey: "from_branch_id",
    as: "from_branch",
  });
  ComplaintTransfer.belongsTo(Branch, {
    foreignKey: "to_branch_id",
    as: "to_branch",
  });

  // Case Associations
  Case.belongsTo(Complaint, { foreignKey: "complaint_id", as: "complaint" });
  Case.belongsTo(DocumentsStore, { foreignKey: "document_id", as: "document" });
  Case.belongsTo(Branch, { foreignKey: "branch_id", as: "branch" });
  Case.belongsTo(CaseStatus, { foreignKey: "status_id", as: "status" });
  Case.belongsTo(CaseSeverity, { foreignKey: "severity_id", as: "severity" });
  Case.belongsTo(User, {
    foreignKey: "assigned_officer_id",
    as: "assigned_officer",
  });
  Case.belongsTo(User, { foreignKey: "investigator_id", as: "investigator" });
  Case.belongsTo(User, { foreignKey: "assessed_by", as: "assessor" });
  Case.belongsTo(User, { foreignKey: "last_changed_by", as: "last_changer" });
  Case.belongsTo(Case, { foreignKey: "original_case_id", as: "original_case" });

  CaseStatus.hasMany(Case, { foreignKey: "status_id", as: "cases" });
  CaseSeverity.hasMany(Case, { foreignKey: "severity_id", as: "cases" });
  Branch.hasMany(Case, { foreignKey: "branch_id", as: "cases" });

  Case.hasMany(CaseAssignment, { foreignKey: "case_id", as: "assignments" });
  Case.hasMany(CaseFlag, { foreignKey: "case_id", as: "flags" });
  Case.hasMany(DisciplinaryRecord, {
    foreignKey: "case_id",
    as: "disciplinary_records",
  });
  Case.hasMany(OpinionSuggestion, {
    foreignKey: "case_id",
    as: "opinions_suggestions",
  });
  Case.hasMany(PropertyRecord, {
    foreignKey: "case_id",
    as: "property_records",
  });
  Case.hasMany(CaseLegalReference, {
    foreignKey: "case_id",
    as: "legal_references",
  });
  Case.hasMany(CaseHistory, { foreignKey: "case_id", as: "history" });
  Case.hasMany(Case, { foreignKey: "original_case_id", as: "reopened_cases" });

  // CaseAssignment Associations
  CaseAssignment.belongsTo(Case, { foreignKey: "case_id", as: "case" });
  CaseAssignment.belongsTo(User, { foreignKey: "officer_id", as: "officer" });
  CaseAssignment.belongsTo(User, { foreignKey: "assigned_by", as: "assigner" });

  // CaseFlag Associations
  CaseFlag.belongsTo(Case, { foreignKey: "case_id", as: "case" });

  // DisciplinaryRecord Associations
  DisciplinaryRecord.belongsTo(Case, { foreignKey: "case_id", as: "case" });
  DisciplinaryRecord.belongsTo(PunishmentOffense, {
    foreignKey: "punishment_type_id",
    as: "punishment_type",
  });

  PunishmentOffense.hasMany(DisciplinaryRecord, {
    foreignKey: "punishment_type_id",
    as: "disciplinary_records",
  });

  // OpinionSuggestion Associations
  OpinionSuggestion.belongsTo(User, { foreignKey: "user_id", as: "user" });
  OpinionSuggestion.belongsTo(Case, { foreignKey: "case_id", as: "case" });

  // PropertyRecord Associations
  PropertyRecord.belongsTo(Case, { foreignKey: "case_id", as: "case" });

  // Notification Associations
  Notification.belongsTo(User, { foreignKey: "user_id", as: "user" });

  // CaseLegalReference Associations
  CaseLegalReference.belongsTo(Case, { foreignKey: "case_id", as: "case" });

  // CaseHistory Associations
  CaseHistory.belongsTo(Case, { foreignKey: "case_id", as: "case" });
  CaseHistory.belongsTo(User, { foreignKey: "changed_by", as: "changer" });

  console.log("✅ All model associations setup successfully");
};

export default setupAssociations;
