import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders Add a Task heading", () => {
  render(<App />);
  expect(screen.getByText(/Add a Task/i)).toBeInTheDocument();
});

test("allows typing into title field", async () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Title/i);
  await userEvent.type(input, "My new task");
  expect(input.value).toBe("My new task");
});