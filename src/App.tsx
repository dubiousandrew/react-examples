import React from "react";
import "./App.css";
import { TodoListView, TLV } from "./TodoListView";
import { AddTodo, AT } from "./AddTodo";
import { User } from "./User";
import { createStore, combineReducers } from "redux";

import { useStores } from "./stores/use-stores";

import todos from "./redux/todo.reducer";

const store = createStore(todos);

export const App = () => {
  return (
    <div className="App">
      <div>
        <h1>Todo List - Mobx</h1>
        <AT />
        <TLV />
        <User />
      </div>
      <div>
        <h1>Todo List - Redux</h1>
      </div>
    </div>
  );
};

export default App;
