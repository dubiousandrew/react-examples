import { type } from "os";

export interface Action {
  type: string;
  payload?: any;
}
export const ADD_TODO = "ADD TODO";
export const addTodo = (text: string): Action => ({
  type: ADD_TODO,
  payload: text,
});
