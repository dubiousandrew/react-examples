import { observable, computed, action } from "mobx";
import { add } from "../api";

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
