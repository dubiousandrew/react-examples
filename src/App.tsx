import React, { useState } from "react";
import "./App.css";
import { TodoListView } from "./TodoListView";
import { Todo, TodoList } from "./todo.interface";
import { AddTodo } from "./AddTodo";
import { autorun } from "mobx";

const store: TodoList = new TodoList();

store.todos.push({
  content: "learn redux",
  completed: true,
  id: store.nextId++,
});

autorun(() => console.log(store.incompleteCount));

function App() {
  const addTodo = (content: string) => {
    store.todos.push({
      content: content,
      completed: false,
      id: store.nextId++,
    });
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoListView todoList={store} />
    </div>
  );
}

export default App;
