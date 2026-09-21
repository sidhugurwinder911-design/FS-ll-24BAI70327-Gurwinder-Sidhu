import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Social Media Scheduler title", () => {
  render(<App />);
  expect(screen.getByText(/Social Media Scheduler/i)).toBeInTheDocument();
});

test("renders Add Event button", () => {
  render(<App />);
  expect(screen.getByRole("button", { name: /add event/i })).toBeInTheDocument();
});

test("renders Scheduled Events heading", () => {
  render(<App />);
  expect(screen.getByText(/Scheduled Events/i)).toBeInTheDocument();
});

test("renders initial events", () => {
  render(<App />);
  expect(screen.getByText("sidhu_gurwinder07")).toBeInTheDocument();
  expect(screen.getByText("24BAI70327")).toBeInTheDocument();
});