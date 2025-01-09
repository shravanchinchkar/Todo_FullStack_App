import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleTitle(e) {
    const title = e.target.value;
    console.log("Title:",title)
    setTitle(title);
  }

  function handleDescription(e) {
    const description = e.target.value;
    console.log("Descripiton:",description)
    setDescription(description);
  }

  async function postTodos() {
    const res=fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers:{
        "content-type":"application/json"
      }
    });
  }

  return (
    <div className="flex flex-col">
      <input
        className="border-[2px] border-black m-[1rem] w-[250px] p-[0.4rem] placeholder:text-black"
        type="text"
        placeholder="Todo title"
        onChange={handleTitle}
      ></input>

      <input
        className="border-[2px] border-black m-[1rem] w-[250px] p-[0.4rem] placeholder:text-black"
        type="text"
        placeholder="Todo description"
        onChange={handleDescription}
      ></input>

      <button
        className="w-[250px] border-black border-[2px] m-[1rem] font-bold p-[0.4rem]"
        onClick={postTodos}
      >
        Add a todo
      </button>
    </div>
  );
}
