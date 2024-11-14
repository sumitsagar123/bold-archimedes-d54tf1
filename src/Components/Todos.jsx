import React from "react";
import Addtodo from "./Addtodo";
import Todoitems from "./Todoitems";

function Todo() {
  const [todo, settodo] = React.useState([]);
  const handleclick = (text) => {
    console.log(text);
    const newitem = {
      title: text,
      status: false,
      id: Date.now() + text + Math.random(),
    };
    const new_item = [...todo, newitem];

    settodo(new_item);
  };
  const handletoggle = (id) => {
    const todo_after_updation = todo.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );
    settodo(todo_after_updation);
  };

  const handledelete = (id) => {
    const updatedItems = todo.filter((item) => item.id !== id);
    settodo(updatedItems); // Update state with the new list
  };
  return (
    <>
      <Addtodo handleclick={handleclick} />
      <div>
        {todo.map((t) => (
          <Todoitems
            key={t.id}
            title={t.title}
            status={t.status}
            id={t.id}
            handletoggle={handletoggle}
            handledelete={handledelete}
          />
        ))}
      </div>
    </>
  );
}
export default Todo;
