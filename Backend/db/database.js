const mongoose=require("mongoose")
const { boolean } = require("zod")

mongoose.connect("mongodb+srv://shravanchinchkar:Shravan%40132610@shrav.wg75m.mongodb.net/todoApp")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    complete:Boolean
})

const todo=mongoose.model('todoApp',todoSchema)

module.exports={
    todo:todo
}