import { TodoList, Todo } from "./todo.interface";
import { configure } from "mobx";

configure({ enforceActions: "always" });
export const store: TodoList = new TodoList();

store.addTodo("learn mobx");
