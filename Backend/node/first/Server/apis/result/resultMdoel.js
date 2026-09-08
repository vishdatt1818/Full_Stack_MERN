const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
      required: true,
      unique: true
    },

    candidateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true
    },

    interviewId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Interview"
    },

    result: {
      type: String,
      enum: ["selected", "rejected", "waitlisted"],
      required: true
    },

    score: {
      type: Number,
      min: 0,
      max: 100
    },

    feedback: {
      type: String
    },

    offeredSalary: {
      type: Number
    },

    joiningDate: {
      type: Date
    },

    decidedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Result", resultSchema);