import { observable, computed } from "mobx";

export class Todo {
  @observable content: string = "";
  @observable completed: boolean = false;
  id: number;

  constructor(id: number, content: string) {
    this.id = id;
    this.content = content;
  }
}

export class TodoList {
  @observable nextId: number = 0;
  @observable todos: Todo[] = [];
  @computed get incompleteCount() {
    return this.todos.filter((t) => !t.completed).length;
  }
}
