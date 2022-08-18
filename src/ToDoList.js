import {useState} from "react";

function ToDoList() {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  return (
    <div>
      <input onChange={onChange} value={toDo} text="text" placeholder="Write your to do..." />
    </div>
  );
}

export default ToDoList;