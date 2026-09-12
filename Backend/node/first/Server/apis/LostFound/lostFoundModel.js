const mongoose = require("mongoose")

const LostFoundSchema = new mongoose.Schema(
    {
        itemName: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            required: true,
            trim: true
        },

        category: {
            type: String,
            required: true,
            trim: true
        },

        location: {
            type: String,
            required: true,
            trim: true
        },

        reportedBy: {
            type: String,
            required: true,
            trim: true
        },

        status: {
            type: String,
            enum: ["Lost", "Found", "Returned"],
            default: "Lost"
        },

        contactNumber: {
            type: String,
            required: true,
            trim: true
        },
         isDelete : {type : Boolean, default: false},
    createdAt: {type:Date, default:new Date},
    updatedAt : {type: Date, default:null}
    },
    
)

const LostFoundModel = mongoose.model("LostFound", LostFoundSchema)

module.exports = LostFoundModel