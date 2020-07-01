import React from "react";
import { TodoItem } from "./todo.interface";

export function Todo(props: {todo: TodoItem, toggleTodo: any}){
  const style = props.todo.completed ? {textDecoration: 'line-through'} : {};
  return (
    <li style={style} onClick={()=>props.toggleTodo(props.todo.id)} key={props.todo.id}>
      {props.todo.content}
    </li>
  )
}