import React from "react";
import { TodoList } from "./todo.interface";
import { TodoItem } from "./TodoItem";
import { observer } from "mobx-react";
import { User } from "./User";
import { Todo } from "./todo.interface";

export const TodoListView = ({ todos }: { todos: Todo[] }) => {
  const list = todos.map((todo, i) => <TodoItem todo={todo} key={todo.id} />);

  return (
    <div>
      <ul>{list}</ul>
      <div>total: {todos.length}</div>
    </div>
  );
};
