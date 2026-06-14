import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  todos: [
    {
      id: v4(),
      task: "Abc",
      isDone: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: v4(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((ele) => ele.id != action.payload);
    },
    marksAsDone: (state, action) => {
      state.todos = state.todos.map((ele) => {
        if (ele.id === action.payload) {
            ele.isDone = true;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, marksAsDone } = todoSlice.actions;
export default todoSlice.reducer;
