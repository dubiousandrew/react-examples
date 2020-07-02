import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Todo } from "./Todo";
import { TodoItem } from "./todo.interface";

const todoItem: TodoItem = {
  content: "learn react",
  id: 1,
  completed: false,
};

test("shows the todo", () => {
  const { getByText } = render(<Todo todo={todoItem} toggleTodo={() => {}} />);
  const item = getByText(/learn react/i);
  expect(item).toBeInTheDocument();
});

test("toggles todo", () => {
  const mockToggleTodo = jest.fn();
  const { getByText } = render(
    <Todo todo={todoItem} toggleTodo={mockToggleTodo} />
  );
  const item = getByText(/learn react/i);
  fireEvent.click(item);

  expect(mockToggleTodo).toHaveBeenCalledWith(1);
});
