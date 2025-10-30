import dotenv from "dotenv";
import app from "./app.js";
import { dbConnection } from "./src/config/database.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await dbConnection();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();
