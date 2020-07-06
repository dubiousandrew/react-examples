import React from "react";
import { observer } from "mobx-react";
import { useStores } from "./stores/use-stores";
/**
 * Example of using the hook to access the store
 */
export const User = observer(() => {
  const { userStore, todoListStore } = useStores();
  return (
    <div>
      {userStore.username}: {todoListStore.incompleteCount}
      <span onClick={todoListStore.checkAll}>check all</span>
    </div>
  );
});
