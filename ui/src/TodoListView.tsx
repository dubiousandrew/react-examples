import React from "react";
import { TodoItem } from "./TodoItem";
import { observer } from "mobx-react";

import { useStores } from "./stores/use-stores";

export const TodoListView = observer(() => {
  const { todoListStore } = useStores();

  const list = todoListStore.todos.map((todo, i) => (
    <TodoItem todo={todo} key={todo.id} />
  ));

  return (
    <div>
      <ul>{list}</ul>
      <div>total: {todoListStore.todos.length}</div>
      <div>incomplete: {todoListStore.incompleteCount}</div>
    </div>
  );
});
