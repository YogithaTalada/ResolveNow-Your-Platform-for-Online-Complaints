const mongoose = require("mongoose");

/* ================= USER SCHEMA ================= */

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    enum: ["customer", "agent", "admin"],
    required: true
  }
}, { timestamps: true });

const User = mongoose.model("user_Schema", userSchema);


/* ================= COMPLAINT SCHEMA ================= */

const complaintSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user_Schema",
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  pincode: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["Pending", "Assigned", "In Progress", "Resolved"],
    default: "Pending"
  }
}, { timestamps: true });

const Complaint = mongoose.model("complaint_schema", complaintSchema);


/* ================= ASSIGNED COMPLAINT SCHEMA ================= */

const assignedComplaintSchema = new mongoose.Schema({
  agentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user_Schema",
    required: true
  },
  complaintId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "complaint_schema",
    required: true
  },
  agentName: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["Assigned", "In Progress", "Resolved"],
    default: "Assigned"
  }
}, { timestamps: true });

const AssignedComplaint = mongoose.model("assigned_complaint", assignedComplaintSchema);


/* ================= CHAT / MESSAGE SCHEMA ================= */

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  complaintId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "complaint_schema",
    required: true
  }
}, { timestamps: true });

const Message = mongoose.model("message", messageSchema);


/* ================= EXPORT ================= */

module.exports = {
  User,
  Complaint,
  AssignedComplaint,
  Message
};