import React, { useState } from "react";
import "./App.css";
import { TodoList } from "./TodoList";
import { TodoItem } from "./todo.interface";
import { AddTodo } from "./AddTodo";

function App() {
  const init: TodoItem[] = [
    {
      content: "learn redux",
      completed: true,
      id: 1,
    },
  ];
  const [todos, updateTodos] = useState(init);
  const [nextId, updateNextId] = useState(2);

  const toggleTodo = (id: number) => {
    updateTodos(
      todos.map((todo, index) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  const addTodo = (content: string) => {
    updateNextId(nextId + 1);
    const newTodo: TodoItem = {
      content: content,
      completed: false,
      id: nextId,
    };
    updateTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList items={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
