const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
      required: true
    },

    candidateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    recruiterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true
    },

    interviewType: {
      type: String,
      enum: ["online", "offline", "phone"],
      required: true
    },

    date: {
      type: Date,
      required: true
    },

    time: {
      type: String,
      required: true
    },

    meetingLink: {
      type: String
    },

    location: {
      type: String
    },

    interviewerName: {
      type: String
    },

    status: {
      type: String,
      enum: [
        "scheduled",
        "completed",
        "cancelled",
        "rescheduled"
      ],
      default: "scheduled"
    },

    notes: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Interview", interviewSchema);