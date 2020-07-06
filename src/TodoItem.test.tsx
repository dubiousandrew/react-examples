import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TodoItem } from "./TodoItem";
import { Todo } from "./stores/todo";

const todoItem = new Todo(1, "learn react");

test("shows the todo", () => {
  const { getByText } = render(<TodoItem todo={todoItem} />);
  const item = getByText(/learn react/i);
  expect(item).toBeInTheDocument();
});

test("toggles todo", () => {
  const mockToggleTodo = jest.spyOn(todoItem, "toggleTodo");
  const { getByText } = render(<TodoItem todo={todoItem} />);
  const item = getByText(/learn react/i);
  fireEvent.click(item);

  expect(mockToggleTodo).toHaveBeenCalledTimes(1);
});
