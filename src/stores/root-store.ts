import { TodoListStore } from "./todo-list-store";
import { UserStore } from "./user-store";
import { configure, autorun } from "mobx";

configure({ enforceActions: "always" });

export class RootStore {
  todoListStore = new TodoListStore();
  userStore = new UserStore();
  constructor() {
    this.todoListStore.addTodo("learn mobx");
  }
}
