const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true
    },

    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true
    },

    requirements: {
      type: String
    },

    responsibilities: {
      type: String
    },

    skills: [
      {
        type: String
      }
    ],

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "JobCategory"
    },

    jobType: {
      type: String,
      enum: ["full-time", "part-time", "internship", "contract"],
      required: true
    },

    experienceLevel: {
      type: String,
      enum: ["entry", "mid", "senior"]
    },

    salaryMin: {
      type: Number
    },

    salaryMax: {
      type: Number
    },

    salaryCurrency: {
      type: String,
      default: "INR"
    },

    location: {
      type: String,
      required: true
    },

    workMode: {
      type: String,
      enum: ["onsite", "hybrid", "remote"],
      default: "onsite"
    },

    vacancies: {
      type: Number,
      default: 1
    },

    applicationDeadline: {
      type: Date
    },

    status: {
      type: String,
      enum: ["draft", "active", "closed"],
      default: "draft"
    }
  },
  {
    timestamps: true
  }
);

jobSchema.index({
  title: "text",
  description: "text",
  skills: "text"
});

jobSchema.index({ location: 1 });
jobSchema.index({ category: 1 });
jobSchema.index({ jobType: 1 });
jobSchema.index({ workMode: 1 });
jobSchema.index({ companyId: 1 });

module.exports = mongoose.model("Job", jobSchema);