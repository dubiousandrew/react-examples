import React, { useState } from "react";
import { useStores } from "./stores/use-stores";
import { observer } from "mobx-react";

export function AddTodo(props: { addTodo: (text: string) => void }) {
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

export const AT = observer(() => {
  const { todoListStore } = useStores();
  return <AddTodo addTodo={todoListStore.addTodo} />;
});
