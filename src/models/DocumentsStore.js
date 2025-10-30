import { DataTypes } from "sequelize";
import { BaseModel } from "./BaseModel.js";

const DocumentsStore = BaseModel.init("documents_store", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  document_no: {
    type: DataTypes.STRING(50),
    unique: true,
  },
  complaints_id: {
    type: DataTypes.INTEGER,
  },
  upload_documents: {
    type: DataTypes.TEXT,
  },
  document_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default DocumentsStore;
