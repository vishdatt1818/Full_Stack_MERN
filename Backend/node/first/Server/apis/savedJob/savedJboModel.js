const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true
    },

    candidateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    resume: {
      type: String
    },

    coverLetter: {
      type: String
    },

    status: {
      type: String,
      enum: [
        "applied",
        "shortlisted",
        "interview",
        "selected",
        "rejected"
      ],
      default: "applied"
    }
  },
  {
    timestamps: true
  }
);

// Candidate cannot apply for the same job twice
applicationSchema.index(
  { jobId: 1, candidateId: 1 },
  { unique: true }
);

module.exports = mongoose.model(
  "Application",
  applicationSchema
);