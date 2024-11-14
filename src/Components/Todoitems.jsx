function Todoitems({ title, id, status, handletoggle, handledelete }) {
  return (
    <>
      <div>
        <div>
          <li key={id}>
            {title}-{status ? "Completed" : "Not Completed"}
          </li>
          <button onClick={() => handletoggle(id)}>Toggle</button>
          <button onClick={() => handledelete(id)}>Delete</button>
        </div>
      </div>
    </>
  );
}
export default Todoitems;
