const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    candidateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    title: {
      type: String,
      required: true,
      trim: true
    },

    resumeUrl: {
      type: String,
      required: true
    },

    skills: [
      {
        type: String
      }
    ],

    education: [
      {
        degree: String,
        institution: String,
        startYear: Number,
        endYear: Number
      }
    ],

    experience: [
      {
        company: String,
        position: String,
        startDate: Date,
        endDate: Date,
        description: String
      }
    ],

    isDefault: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Resume", resumeSchema);