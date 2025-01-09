const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://shravanchinchkar:Shravan%40132610@shrav.wg75m.mongodb.net/todoApp")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todoApp',todoSchema)

module.exports={
    todo:todo
}