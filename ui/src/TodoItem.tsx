import React from "react";
import { Todo } from "./stores/todo";
/**
 * Since it is passed in as a prop, it
 * looks like wrapping as an observable is not needed?
 * but... seems like toggleTodo might should be a prop
 * @param props
 */
export const TodoItem = (props: { todo: Todo }) => {
  const style = props.todo.completed ? { textDecoration: "line-through" } : {};
  return (
    <li style={style} onClick={props.todo.toggleTodo} key={props.todo.id}>
      {props.todo.content} - {props.todo.status}
    </li>
  );
};
