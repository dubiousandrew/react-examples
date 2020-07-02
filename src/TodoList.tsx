import React from "react";
import { TodoItem } from "./todo.interface";
import { Todo } from "./Todo";
export function TodoList(props: {
  items: TodoItem[];
  toggleTodo: (arg0: number) => any;
}) {
  const list = props.items.map((todo, i) => (
    <Todo
      todo={todo}
      toggleTodo={() => props.toggleTodo(todo.id)}
      key={todo.id}
    />
  ));

  return <ul>{list}</ul>;
}
