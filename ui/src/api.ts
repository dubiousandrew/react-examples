import { Todo } from "./stores/todo";
import superagent from "superagent";

export function add(todo: Todo) {
  return superagent.post("/todo").send({ todo: todo });
}
