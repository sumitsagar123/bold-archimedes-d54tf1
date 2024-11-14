import React from "react";

function Addtodo(props) {
  const [text, settext] = React.useState("");

  const handlechange = (e) => {
    settext(e.target.value);
    // settext("");
  };
  const handleclick = () => {
    props.handleclick(text);
    settext("");
  };
  return (
    <>
      <div>
        <input type="text" value={text} onChange={handlechange} />
        <button onClick={handleclick}>Add</button>
      </div>
    </>
  );
}
export default Addtodo;
