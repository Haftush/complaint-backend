import express from "express";

const app = express();

// Basic health check
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

// ✅ Database test route
import sequelize from "./src/config/database.js";

app.get("/test-db", async (req, res) => {
  try {
    const [result] = await sequelize.query("SELECT NOW() AS time");
    res.json({ success: true, dbTime: result[0].time });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default app;
