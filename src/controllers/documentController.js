import { DocumentsStore, Complaint } from "../models/index.js";

// Get all documents
export const getDocuments = async (req, res) => {
  try {
    const documents = await DocumentsStore.findAll({
      include: [{ model: Complaint, as: "complaint" }],
      order: [["document_date", "DESC"]],
    });
    res.json({ success: true, data: documents });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get document by ID
export const getDocumentById = async (req, res) => {
  try {
    const document = await DocumentsStore.findByPk(req.params.id, {
      include: [{ model: Complaint, as: "complaint" }],
    });

    if (!document) {
      return res
        .status(404)
        .json({ success: false, error: "Document not found" });
    }

    res.json({ success: true, data: document });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Create new document
export const createDocument = async (req, res) => {
  try {
    // Generate unique document number
    const documentNo = `DOC-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}`;
    const documentData = {
      ...req.body,
      document_no: documentNo,
    };

    const document = await DocumentsStore.create(documentData);
    const documentWithDetails = await DocumentsStore.findByPk(document.id, {
      include: [{ model: Complaint, as: "complaint" }],
    });

    res.status(201).json({ success: true, data: documentWithDetails });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update document
export const updateDocument = async (req, res) => {
  try {
    const document = await DocumentsStore.findByPk(req.params.id);
    if (!document) {
      return res
        .status(404)
        .json({ success: false, error: "Document not found" });
    }

    await document.update(req.body);
    const updatedDocument = await DocumentsStore.findByPk(document.id, {
      include: [{ model: Complaint, as: "complaint" }],
    });

    res.json({ success: true, data: updatedDocument });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete document
export const deleteDocument = async (req, res) => {
  try {
    const document = await DocumentsStore.findByPk(req.params.id);
    if (!document) {
      return res
        .status(404)
        .json({ success: false, error: "Document not found" });
    }

    await document.destroy();
    res.json({ success: true, message: "Document deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get documents by complaint
export const getDocumentsByComplaint = async (req, res) => {
  try {
    const documents = await DocumentsStore.findAll({
      where: { complaints_id: req.params.complaintId },
      include: [{ model: Complaint, as: "complaint" }],
      order: [["document_date", "DESC"]],
    });

    res.json({ success: true, data: documents });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
