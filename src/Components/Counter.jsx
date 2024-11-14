import React from "react";

function Counter() {
  const [count, setCount] = React.useState(50);
  const [text, settext] = React.useState("");
  const [todo, settodo] = React.useState([]);

  const Button = ({ handleClick, label }) => (
    <button onClick={handleClick}>{label}</button>
  );

  const handleClick = () => {
    const newitem = {
      title: text,
      status: false,
      id: Date.now() + text + Math.random(),
    };
    const new_item = [...todo, newitem];

    settodo(new_item);
  };
  console.log(todo);
  const handlechange = (e) => {
    settext(e.target.value);
  };
  return (
    <>
      <div>
        <input type="text" value={text} onChange={handlechange} />
        <Button handleClick={handleClick} label="Add" />
      </div>
      <div>
        {todo.map((t) => (
          <li key={t.id}>
            {t.title}-{t.status ? "Completed" : "Not Completed"}
          </li>
        ))}
      </div>
    </>
  );
}
export default Counter;
