import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./features/todo/todoSlice";

export default function Form() {
  let [task, setTask] = useState("");
  const dispatch = useDispatch();

  let onSumbitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(task));
    console.log(task);
  };

  return (
    <div>
      <form action="" onSubmit={onSumbitHandler}>
        <input
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button className="counter">Click me!</button>
      </form>
    </div>
  );
}
