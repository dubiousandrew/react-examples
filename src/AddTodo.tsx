import React, { useState } from "react";
export function AddTodo(props: { addTodo: (content: string) => any }) {
  const [content, updateContent] = useState("");
  const handleAdd = () => {
    if (content.length) {
      props.addTodo(content);
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
