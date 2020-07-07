import React, { useState } from "react";
import { useStores } from "./stores/use-stores";

export function AddTodo() {
  const [content, updateContent] = useState("");
  const { todoListStore } = useStores();

  const handleAdd = () => {
    if (content.length) {
      todoListStore.addTodo(content);
      updateContent("");
    }
  };
  return (
    <div>
      <input
        value={content}
        onChange={(e) => updateContent(e.target.value)}
      ></input>
      <button onClick={handleAdd}>add</button>
    </div>
  );
}
