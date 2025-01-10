import { useState, useEffect } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  //following is the smart way of getting data from backend in react
  useEffect(() => {
    async function fetchTodoData() {
      const response = await fetch("http://localhost:3000/todos");
      const data = await response.json();
      setTodos(data.todos);
    }
    fetchTodoData();
  }, []);
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
