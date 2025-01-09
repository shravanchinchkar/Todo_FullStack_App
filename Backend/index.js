const express = require("express");
const { createTodo, updateTodo } = require("./type");
const { todo } = require("./db/database");
const app = express();

app.use(express.json()); //make sure all the post endpoints works,it helps to parse a body if its JSON body

//Endpoint for creating a todo
app.post("/todo", async (req, res) => {
  //validate the input which as came from user
  const payLoad = req.body;
  const parsedPayLoad = createTodo.safeParse(payLoad);
  if (!parsedPayLoad.success) {
    return res.status(411).json({
      message: "You gave a wrong input",
    });
  } else {
    const ceratedTodo = await todo.create({
      title: payLoad.title,
      description: payLoad.description,
      completed:false
    });
    if (!createTodo) {
      return res.status(400).json({
        message: "Something went wrong!",
      });
    } else {
      return res.status(200).json({
        message: "Todo Created!",
      });
    }
  }
});

//Endpoint for getting all the todos
app.get("/todos", async (req, res) => {
  const todos = await todo.find();
  return res.status(200).json({
    todos: todos,
  });
});

//Endpoint for marking a specific todo as completed
app.put("/complete",async(req, res) => {
  const payLoad = req.body;
  const parsedPayLoad = updateTodo.safeParse(payLoad);
  if (!parsedPayLoad.success) {
    return res.status(411).json({
      message: "Invalid Id",
    });
  }
  else{
    const updatedTodo=await todo.update({
        _id:req.body.id //condition of what to update
    },{
        completed:true
    })
    console.log("Updated:-",updatedTodo)
    if(!updatedTodo){
        return res.status(400).json({
            message:"Something went wrong!"
        })
    }
    else{
        return res.status(200).json({
            message:"Todo marked as completed!"
        })
    }
  }
});

app.listen(3000);
