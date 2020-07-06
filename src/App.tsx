import React from "react";
import "./App.css";
import { TodoListView } from "./TodoListView";
import { AddTodo } from "./AddTodo";
import { autorun } from "mobx";
import { store } from "./store";
import { observer } from "mobx-react";
import { User } from "./User";

autorun(() => console.log(JSON.stringify(store)));

export const App = observer(() => {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo addTodo={store.addTodo} />
      <TodoListView todos={store.todos} />
      <div>incomplete: {store.incompleteCount}</div>
      <User />
    </div>
  );
});

export default App;
