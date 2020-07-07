import { observable, computed, action } from "mobx";
import { add } from "../api";
import { Todo } from "./todo";
import { RootStore } from "./root-store";

export class TodoListStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  nextId: number = 0;
  @observable todos: Todo[] = [];
  @computed get incompleteCount() {
    return this.todos.filter((t) => !t.completed).length;
  }
  @action.bound
  addTodo(content: string) {
    const ntd = new Todo(this.nextId++, content);
    this.todos.push(ntd);
    //just an example of how the stores can communicate through the root store.
    ntd.status = "added by:" + this.rootStore.userStore.username;
    add(ntd)
      .then(() => {
        ntd.markAsSaved();
      })
      .catch((e) => console.error("error connecting"));
  }

  @action.bound
  checkAll() {
    this.todos.forEach((t) => (t.completed = true));
  }
}
