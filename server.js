import { app, initializeApp } from "./app.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Initialize database and models
    await initializeApp();

    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📊 DAS Application started successfully`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

// Start the server
startServer();
