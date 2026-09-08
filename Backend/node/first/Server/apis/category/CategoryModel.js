const { number } = require("joi")
const mongoose = require("mongoose")

let CategorySchema = mongoose.Schema({
    name : {type:String, default:"none"},
    description : {type:String , default:""},
    image: {type:String, default:''},
    price: {type:Number, default:''},
    stock: {type:Number, default:''},
    status: {type:Boolean, default:true},
    createdAt: {type:Date, default:new Date}
})

module.exports = mongoose.model("Categories", CategorySchema)

