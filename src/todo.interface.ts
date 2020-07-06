import { observable, computed, action } from "mobx";
import { add } from "./api";

export class Todo {
  @observable content: string = "";
  @observable completed: boolean = false;
  @observable status: string = "local";
  id: number;

  constructor(id: number, content: string) {
    this.id = id;
    this.content = content;
  }

  @action.bound
  toggleTodo() {
    this.completed = !this.completed;
  }

  @action.bound
  markAsSaved() {
    this.status = "saved";
  }
}

export class TodoList {
  constructor() {
    console.log("new store!!!!!!!!!!!");
  }
  nextId: number = 0;
  @observable todos: Todo[] = [];
  @observable username: string = "Andrew";
  @computed get incompleteCount() {
    return this.todos.filter((t) => !t.completed).length;
  }
  @action.bound
  addTodo(content: string) {
    const ntd = new Todo(this.nextId++, content);
    this.todos.push(ntd);
    ntd.status = "syncing...";
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
