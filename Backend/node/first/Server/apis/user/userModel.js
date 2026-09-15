
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: true
    },

    phone: {
      type: String
    },

    profileImage: {
      type: String
    },

    role: {
      type: String,
      enum: ["admin", "candidate", "recruiter"],
      default: "candidate"
    },

    location: {
      type: String
    },

    isActive: {
      type: Boolean,
      default: true
    },
     isDelete : {type : Boolean, default: false},
    createdAt: { type: Date, default: new Date },
    updatedAt : { type: Date, default: null }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);