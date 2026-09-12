const { number } = require("joi")
const mongoose = require("mongoose")

let CategorySchema = mongoose.Schema({
    autoId : {type : String, deafault: null},
    name : {type:String, default:"none"},
    description : {type:String , default:""},
    image: {type:String, default:''},
    price: {type:Number, default:''},
    stock: {type:Number, default:''},
    status: {type:Boolean, default:true},
    isDelete : {type : Boolean, default: false},
    createdAt: {type:Date, default:new Date},
    updatedAt : {type: Date, default:null}
})

module.exports = mongoose.model("Categories", CategorySchema)

