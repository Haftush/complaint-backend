import express from "express";
import cors from "cors";
import { dbConnection } from "./src/config/database.js";
import { setupAssociations } from "./src/models/index.js";

// Import all routes
import userRoutes from "./src/routes/userRoutes.js";
import branchRoutes from "./src/routes/branchRoutes.js";
import complaintRoutes from "./src/routes/complaintRoutes.js";
import caseRoutes from "./src/routes/caseRoutes.js";
import documentRoutes from "./src/routes/documentRoutes.js";
import userStatusRoutes from "./src/routes/userStatusRoutes.js";
import userRoleRoutes from "./src/routes/userRoleRoutes.js";
import caseStatusRoutes from "./src/routes/caseStatusRoutes.js";
import caseSeverityRoutes from "./src/routes/caseSeverityRoutes.js";
import complaintTransferRoutes from "./src/routes/complaintTransferRoutes.js";
import caseAssignmentRoutes from "./src/routes/caseAssignmentRoutes.js";
import caseFlagRoutes from "./src/routes/caseFlagRoutes.js";
import punishmentOffenseRoutes from "./src/routes/punishmentOffenseRoutes.js";
import disciplinaryRecordRoutes from "./src/routes/disciplinaryRecordRoutes.js";
import opinionSuggestionRoutes from "./src/routes/opinionSuggestionRoutes.js";
import propertyRecordRoutes from "./src/routes/propertyRecordRoutes.js";
import notificationRoutes from "./src/routes/notificationRoutes.js";
import caseLegalReferenceRoutes from "./src/routes/caseLegalReferenceRoutes.js";
import caseHistoryRoutes from "./src/routes/caseHistoryRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/branches", branchRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/cases", caseRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/user-statuses", userStatusRoutes);
app.use("/api/user-roles", userRoleRoutes);
app.use("/api/case-statuses", caseStatusRoutes);
app.use("/api/case-severities", caseSeverityRoutes);
app.use("/api/complaint-transfers", complaintTransferRoutes);
app.use("/api/case-assignments", caseAssignmentRoutes);
app.use("/api/case-flags", caseFlagRoutes);
app.use("/api/punishment-offenses", punishmentOffenseRoutes);
app.use("/api/disciplinary-records", disciplinaryRecordRoutes);
app.use("/api/opinions-suggestions", opinionSuggestionRoutes);
app.use("/api/property-records", propertyRecordRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/case-legal-references", caseLegalReferenceRoutes);
app.use("/api/case-history", caseHistoryRoutes);

// Health check and API info route
app.get("/", (req, res) => {
  res.json({
    message: "DAS API Server is running!",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
    endpoints: {
      users: "/api/users",
      branches: "/api/branches",
      complaints: "/api/complaints",
      cases: "/api/cases",
      documents: "/api/documents",
      userStatuses: "/api/user-statuses",
      userRoles: "/api/user-roles",
      caseStatuses: "/api/case-statuses",
      caseSeverities: "/api/case-severities",
      complaintTransfers: "/api/complaint-transfers",
      caseAssignments: "/api/case-assignments",
      caseFlags: "/api/case-flags",
      punishmentOffenses: "/api/punishment-offenses",
      disciplinaryRecords: "/api/disciplinary-records",
      opinionSuggestions: "/api/opinions-suggestions",
      propertyRecords: "/api/property-records",
      notifications: "/api/notifications",
      caseLegalReferences: "/api/case-legal-references",
      caseHistory: "/api/case-history",
    },
  });
});

// API documentation route
app.get("/api", (req, res) => {
  res.json({
    message: "DAS API Documentation",
    version: "1.0.0",
    endpoints: {
      // Core entities
      users: {
        base: "/api/users",
        methods: ["GET", "POST", "PUT", "DELETE"],
        description: "User management",
      },
      branches: {
        base: "/api/branches",
        methods: ["GET", "POST", "PUT", "DELETE"],
        description: "Branch management",
      },
      complaints: {
        base: "/api/complaints",
        methods: ["GET", "POST", "PUT", "DELETE"],
        description: "Complaint management",
      },
      cases: {
        base: "/api/cases",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        description: "Case management",
      },
      // Reference data
      userStatuses: {
        base: "/api/user-statuses",
        methods: ["GET", "POST", "PUT", "DELETE"],
        description: "User status reference data",
      },
      userRoles: {
        base: "/api/user-roles",
        methods: ["GET", "POST", "PUT", "DELETE"],
        description: "User role reference data",
      },
      caseStatuses: {
        base: "/api/case-statuses",
        methods: ["GET", "POST", "PUT", "DELETE"],
        description: "Case status reference data",
      },
      caseSeverities: {
        base: "/api/case-severities",
        methods: ["GET", "POST", "PUT", "DELETE"],
        description: "Case severity reference data",
      },
      // Supporting entities
      documents: {
        base: "/api/documents",
        methods: ["GET", "POST", "PUT", "DELETE"],
        description: "Document management",
      },
      complaintTransfers: {
        base: "/api/complaint-transfers",
        methods: ["GET", "POST", "PUT", "DELETE"],
        description: "Complaint transfer tracking",
      },
      caseAssignments: {
        base: "/api/case-assignments",
        methods: ["GET", "POST", "PUT", "DELETE"],
        description: "Case assignment tracking",
      },
      // Legal and disciplinary
      punishmentOffenses: {
        base: "/api/punishment-offenses",
        methods: ["GET", "POST", "PUT", "DELETE"],
        description: "Punishment and offense types",
      },
      disciplinaryRecords: {
        base: "/api/disciplinary-records",
        methods: ["GET", "POST", "PUT", "DELETE"],
        description: "Disciplinary record management",
      },
      caseLegalReferences: {
        base: "/api/case-legal-references",
        methods: ["GET", "POST", "PUT", "DELETE"],
        description: "Case legal reference management",
      },
      // Additional features
      caseFlags: {
        base: "/api/case-flags",
        methods: ["GET", "POST", "PUT", "DELETE"],
        description: "Case flag management",
      },
      opinionSuggestions: {
        base: "/api/opinions-suggestions",
        methods: ["GET", "POST", "PUT", "DELETE"],
        description: "Opinion and suggestion management",
      },
      propertyRecords: {
        base: "/api/property-records",
        methods: ["GET", "POST", "PUT", "DELETE"],
        description: "Property record management",
      },
      notifications: {
        base: "/api/notifications",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        description: "Notification management",
      },
      caseHistory: {
        base: "/api/case-history",
        methods: ["GET", "POST"],
        description: "Case history and audit trail",
      },
    },
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found",
    path: req.originalUrl,
    method: req.method,
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error("Error:", error);
  res.status(500).json({
    success: false,
    error: "Internal server error",
    message: error.message,
  });
});

// Initialize database and associations
const initializeApp = async () => {
  try {
    await dbConnection();
    setupAssociations();
    console.log("✅ Database and models initialized successfully");
  } catch (error) {
    console.error("❌ Failed to initialize application:", error);
    throw error;
  }
};

export { app, initializeApp };
