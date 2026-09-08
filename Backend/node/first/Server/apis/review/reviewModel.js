const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    candidateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true
    },

    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job"
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },

    title: {
      type: String,
      trim: true
    },

    comment: {
      type: String,
      required: true
    },

    isApproved: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Review", reviewSchema);