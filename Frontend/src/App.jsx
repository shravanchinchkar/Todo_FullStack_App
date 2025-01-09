import { useState,useEffect } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  //following is the smart way of getting data from backend in react
  useEffect(() => {
    async function fetchTodoData(){
      const response=await fetch("http://localhost:3000/todos")
      const data=await response.json();
      console.log("Data is:-",data)
      setTodos(data.todos)
    }
    fetchTodoData();
  }, [])

  //following is the dumb way of getting data from backend in react
  // async function getData() {
  //   const response=await fetch("http://localhost:3000/todos")
  //   const data=await response.json();
  //   setTodos(data.todos);
  // }
  // getData();

  // or

  // fetch("http://localhost:3000/todos")
  // .then(async function(res){
  //   const json1=await res.json();
  //   // console.log("json",json1)
  //   setTodos(json1.todos)
  // })


  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
