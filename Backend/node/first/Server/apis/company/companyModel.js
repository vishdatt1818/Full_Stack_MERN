const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    recruiterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    companyName: {
      type: String,
      required: true,
      trim: true
    },

    companyLogo: {
      type: String
    },

    description: {
      type: String
    },

    industry: {
      type: String
    },

    companySize: {
      type: String
    },

    website: {
      type: String
    },

    email: {
      type: String
    },

    phone: {
      type: String
    },

    location: {
      type: String
    },

    foundedYear: {
      type: Number
    },

    isVerified: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Company", companySchema);