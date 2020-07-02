import { observable, computed, action } from "mobx";

export class Todo {
  @observable content: string = "";
  @observable completed: boolean = false;
  id: number;

  constructor(id: number, content: string) {
    this.id = id;
    this.content = content;
  }

  @action.bound
  toggleTodo() {
    this.completed = !this.completed;
  }
}

export class TodoList {
  nextId: number = 0;
  @observable todos: Todo[] = [];
  @computed get incompleteCount() {
    return this.todos.filter((t) => !t.completed).length;
  }
  @action.bound
  addTodo(content: string) {
    this.todos.push(new Todo(this.nextId++, content));
  }
}
