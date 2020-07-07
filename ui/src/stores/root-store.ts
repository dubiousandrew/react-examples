import { TodoListStore } from "./todo-list-store";
import { UserStore } from "./user-store";
import { configure } from "mobx";

configure({ enforceActions: "always" });

export class RootStore {
  todoListStore = new TodoListStore(this);
  userStore = new UserStore();
  constructor() {
    this.todoListStore.addTodo("learn mobx");
  }
}
