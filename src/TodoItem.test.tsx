import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TodoItem } from "./TodoItem";
import { Todo } from "./todo.interface";

const todoItem: Todo = {
  content: "learn react",
  id: 1,
  completed: false,
};

test("shows the todo", () => {
  const { getByText } = render(
    <TodoItem todo={todoItem} toggleTodo={() => {}} />
  );
  const item = getByText(/learn react/i);
  expect(item).toBeInTheDocument();
});

test("toggles todo", () => {
  const mockToggleTodo = jest.fn();
  const { getByText } = render(
    <TodoItem todo={todoItem} toggleTodo={mockToggleTodo} />
  );
  const item = getByText(/learn react/i);
  fireEvent.click(item);

  expect(mockToggleTodo).toHaveBeenCalledWith(1);
});
