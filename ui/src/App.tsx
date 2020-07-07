import React from "react";
import "./App.css";
import { TodoListView } from "./TodoListView";
import { AddTodo } from "./AddTodo";
import { User } from "./User";

export const App = () => {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoListView />
      <User />
    </div>
  );
};

export default App;
