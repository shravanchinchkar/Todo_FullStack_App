const zod=require("zod");

//following input validation is for todo
const todo=zod.object({
    title:zod.string(),
    description:zod.string()
})

//following input validation is for "/complete" endpoint
const complete=zod.object({
    id:zod.string(),
})

module.exports={
    createTodo:todo,
    updateTodo:complete
}