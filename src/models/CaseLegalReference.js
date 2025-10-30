import { DataTypes } from "sequelize";
import { BaseModel } from "./BaseModel.js";

const CaseLegalReference = BaseModel.init("case_legal_references", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  case_id: {
    type: DataTypes.INTEGER,
  },
  law_reference: {
    type: DataTypes.STRING(255),
  },
  sub_law_reference: {
    type: DataTypes.STRING(255),
  },
  law_code: {
    type: DataTypes.STRING(100),
  },
  article_number: {
    type: DataTypes.STRING(50),
  },
  reference_text: {
    type: DataTypes.TEXT,
  },
});

export default CaseLegalReference;
