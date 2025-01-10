export function Todos({ todos }) {
  async function handleComplete(e) {
    const id = e.target.id;
    const response = await fetch("http://localhost:3000/complete", {
      method: "PUT",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log("Update Response:-",response)
  }
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div className="m-[1rem]" key={todo._id}>
            <div>{todo.title}</div>
            <div>{todo.description}</div>
            <button
              id={todo._id}
              className="border-red-500 border-[2px] p-[0.2rem]"
              onClick={handleComplete}
            >
              {todo.completed === true ? "Completed" : "Mark as Completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
