const express = require("express");
const { createTodo, updateTodo } = require("./type");
const { todo } = require("./db/database");
const cors=require("cors")
const app = express();

app.use(express.json()); //make sure all the post endpoints works,it helps to parse a body if its JSON body

//cors package  allows frontend to hit the backend
app.use(cors({
  origin:"http://localhost:5173"
}))

//Endpoint for creating a todo
app.post("/todo", async (req, res) => {
  //validate the input which as came from user
  const payLoad =req.body;

  console.log("Title is:-",req.body.title);
  console.log("description is:-",req.body.description);

  const parsedPayLoad = createTodo.safeParse(payLoad);
  if (!parsedPayLoad.success) {
    return res.status(411).json({
      message: "You gave a wrong input",
    });
  } else {
    const createdTodo = await todo.create({
      title: payLoad.title,
      description: payLoad.description,
      completed: false,
    });
    console.log("Created todo:-", createTodo);
    if (!createdTodo) {
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
app.put("/complete", async (req, res) => {
  const payLoad = req.body;
  const parsedPayLoad = updateTodo.safeParse(payLoad);

  if (!parsedPayLoad.success) {
    return res.status(411).json({
      message: "Invalid Id",
    });
  } else {
    const updatedTodo = await todo.updateOne(
      {
        _id: req.body.id, //condition of what to update
      },
      {
        completed: true,
      }
    );
    console.log("Updated:-", updatedTodo);
    if (!updatedTodo) {
      return res.status(400).json({
        message: "Something went wrong!",
      });
    } else {
      return res.status(200).json({
        message: "Todo marked as completed!",
      });
    }
  }
});

app.listen(3000);
