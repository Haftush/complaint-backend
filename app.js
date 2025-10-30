import express from "express";
import cors from "cors";
import { dbConnection } from "./src/config/database.js";
import { setupAssociations } from "./src/models/index.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get("/", (req, res) => {
  res.json({ message: "DAS API Server is running!" });
});

// Initialize database and associations
const initializeApp = async () => {
  try {
    await dbConnection();
    setupAssociations();
    console.log("✅ Database and models initialized successfully");
  } catch (error) {
    console.error("❌ Failed to initialize application:", error);
    process.exit(1);
  }
};

// Export the app and initialization function
export { app, initializeApp };
