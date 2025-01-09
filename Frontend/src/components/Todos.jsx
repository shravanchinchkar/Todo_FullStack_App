
export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div className="m-[1rem]" key={todo._id}>
            <div>{todo.title}</div>
            <div>{todo.description}</div>
            <button className="border-red-500 border-[2px] p-[0.2rem]">
              {todo.completed===true?"Completed":"Mark as Completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
