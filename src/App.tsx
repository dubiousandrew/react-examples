import React, {useState} from 'react';
import './App.css';
import { TodoList } from "./TodoList";
import { TodoItem } from './todo.interface';

function App() {
  const init: TodoItem[] = [{
    content: 'learn redux',
    completed: true,
    id: 1
  }];
  const[todos, updateTodos] = useState(init);
  

  const toggleTodo = (id: number)=>{
    updateTodos(
      todos.map((todo, index)=>{
        if(todo.id !== id)
          return todo;
        return {
          ...todo,
          completed: !todo.completed
        }
      })
    )
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList items={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
