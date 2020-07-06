import React from "react";
import { Todo } from "./todo.interface";
import { observer } from "mobx-react";
/**
 * Since it is passed in as a prop, it
 * looks like wrapping as an observable is not needed.
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
