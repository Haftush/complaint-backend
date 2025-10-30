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
      console.log(`🔗 Health check: http://localhost:${PORT}/`);
      console.log(`📚 API Documentation: http://localhost:${PORT}/api`);
      console.log(`\n📋 Available API Endpoints:`);
      console.log(`   👥 Users: http://localhost:${PORT}/api/users`);
      console.log(`   🏢 Branches: http://localhost:${PORT}/api/branches`);
      console.log(`   📝 Complaints: http://localhost:${PORT}/api/complaints`);
      console.log(`   ⚖️ Cases: http://localhost:${PORT}/api/cases`);
      console.log(`   📄 Documents: http://localhost:${PORT}/api/documents`);
      console.log(
        `   🔧 User Statuses: http://localhost:${PORT}/api/user-statuses`
      );
      console.log(`   🛡️ User Roles: http://localhost:${PORT}/api/user-roles`);
      console.log(
        `   📊 Case Statuses: http://localhost:${PORT}/api/case-statuses`
      );
      console.log(
        `   ⚠️ Case Severities: http://localhost:${PORT}/api/case-severities`
      );
      console.log(
        `   🔄 Complaint Transfers: http://localhost:${PORT}/api/complaint-transfers`
      );
      console.log(
        `   👨‍💼 Case Assignments: http://localhost:${PORT}/api/case-assignments`
      );
      console.log(`   🚩 Case Flags: http://localhost:${PORT}/api/case-flags`);
      console.log(
        `   ⚖️ Punishment Offenses: http://localhost:${PORT}/api/punishment-offenses`
      );
      console.log(
        `   📋 Disciplinary Records: http://localhost:${PORT}/api/disciplinary-records`
      );
      console.log(
        `   💡 Opinion Suggestions: http://localhost:${PORT}/api/opinions-suggestions`
      );
      console.log(
        `   🏠 Property Records: http://localhost:${PORT}/api/property-records`
      );
      console.log(
        `   🔔 Notifications: http://localhost:${PORT}/api/notifications`
      );
      console.log(
        `   ⚖️ Case Legal References: http://localhost:${PORT}/api/case-legal-references`
      );
      console.log(
        `   📜 Case History: http://localhost:${PORT}/api/case-history`
      );
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

// Start the server
startServer();
