import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// ✅ Create Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT || "postgres",
    logging: false, // disable SQL logging for cleaner console
    pool: {
      max: 5, // Maximum number of connections in pool
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

// ✅ Test and sync DB connection
export const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log(" Database connected successfully!");

    // Sync models automatically
    await sequelize.sync({
      force: false, // ⚠️ set true only if you want to drop & recreate tables
      alter: false, // sync schema changes without losing data
    });

    console.log(" Database models synchronized");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
  }
};

export default sequelize;
