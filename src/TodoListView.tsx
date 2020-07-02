import React from "react";
import { TodoList } from "./todo.interface";
import { TodoItem } from "./TodoItem";
import { observer } from "mobx-react";

export const TodoListView = observer(({ todoList }: { todoList: TodoList }) => {
  const list = todoList.todos.map((todo, i) => (
    <TodoItem todo={todo} key={todo.id} />
  ));

  return (
    <div>
      <ul>{list}</ul>
      <div>total: {todoList.todos.length}</div>
      <div>incomplete: {todoList.incompleteCount}</div>
    </div>
  );
});
