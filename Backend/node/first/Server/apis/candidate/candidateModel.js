const mongoose = require("mongoose");

const candidateProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
     
      unique: true
    },

    name: {
      type: String
    },
    headline: {
      type: String
    },

    bio: {
      type: String
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

    resume: {
      type: String
    },

    portfolioUrl: {
      type: String
    },

    linkedinUrl: {
      type: String
    },

    githubUrl: {
      type: String
    },

    expectedSalary: {
      type: Number
    },

    preferredJobType: {
      type: String,
      enum: ["full-time", "part-time", "internship", "contract"]
    },

    preferredLocation: {
      type: String
    },
     isDelete : {type : Boolean, default: false},
    createdAt: { type: Date, default: new Date },
    updatedAt : { type: Date, default: null }
  }
 
);

module.exports = mongoose.model(
  "CandidateProfile",
  candidateProfileSchema
);