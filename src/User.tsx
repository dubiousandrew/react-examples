import React from "react";
import { observer } from "mobx-react";
import { store } from "./store";
/**
 * Example of accessing the store directly without
 * passing in props.
 */
export const User = observer(() => {
  return (
    <div>
      {store.username}: {store.incompleteCount}
      <span onClick={store.checkAll}>check all</span>
    </div>
  );
});
