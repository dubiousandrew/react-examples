import React from "react";
import "./App.css";
import { TodoListView } from "./TodoListView";
import { AddTodo } from "./AddTodo";
import { autorun } from "mobx";
import { store } from "./store";

autorun(() => console.log(JSON.stringify(store)));

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo addTodo={store.addTodo} />
      <TodoListView todoList={store} />
    </div>
  );
}

export default App;
