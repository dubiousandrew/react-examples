import { ADD_TODO, Action } from "./todo.actions";

interface state {
  nextId: number;
  todos: Array<any>;
}
const initialState: state = {
  nextId: 1,
  todos: [
    {
      id: 0,
      completed: false,
      text: "learn redux",
    },
  ],
};

export default function todos(state = initialState, action: Action): state {
  switch (action.type) {
    case ADD_TODO:
      return {
        nextId: state.nextId + 1,
        todos: [
          ...state.todos,
          {
            id: state.nextId,
            completed: false,
            text: action.payload,
          },
        ],
      };
    default:
      return state;
  }
}
