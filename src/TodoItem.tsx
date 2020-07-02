import React from "react";
import { Todo } from "./todo.interface";
import { observer } from "mobx-react";

export const TodoItem = observer((props: { todo: Todo }) => {
  const style = props.todo.completed ? { textDecoration: "line-through" } : {};
  return (
    <li
      style={style}
      onClick={() => {
        props.todo.completed = !props.todo.completed;
      }}
      key={props.todo.id}
    >
      {props.todo.content}
    </li>
  );
});
