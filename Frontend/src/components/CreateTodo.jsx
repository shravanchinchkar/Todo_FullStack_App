export function CreateTodo() {
  return (
    <div className="flex flex-col">
      <input className="border-[2px] border-black m-[1rem] w-[250px] p-[0.4rem] placeholder:text-black" type="text" placeholder="Todo title"></input>
      <input className="border-[2px] border-black m-[1rem] w-[250px] p-[0.4rem] placeholder:text-black" type="text" placeholder="Todo description"></input>
      <button className="w-[250px] border-black border-[2px] m-[1rem] font-bold p-[0.4rem] ">Add a todo</button>
    </div>
  );
}
