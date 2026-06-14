import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import { deleteTodo, marksAsDone } from "./features/todo/todoSlice";

export default function Todo() {
const todos = useSelector((state) => state.todos);

const dispatch = useDispatch();

const deleteHandler = (id) =>{
    dispatch(deleteTodo(id));
}

const doneHandler = (id) =>{
    dispatch(marksAsDone(id));
}

return <div>
    <Form/>
    <h2>
        All Todo List
    </h2>
    {todos.map((ele) => {
        return(
        <li key={ele.id}>
            <span style={ele.isDone ? {textDecorationLine : "line-through"} : {}}>{ele.task}</span>
            <button onClick={() => {deleteHandler(ele.id)}}>Delete</button>
            <button onClick={() => {console.log(ele),doneHandler(ele.id)}}>Done</button>
        </li>
        )
    })}
  </div>;
}
