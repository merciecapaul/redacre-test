import { render, screen } from "@testing-library/react";
import { ExchangeRate } from "./ExchangeRate";

test("renders exchange button", () => {
  render(<ExchangeRate />);
  const linkElement = screen.getByText(/Exchange/i);
  expect(linkElement).toBeInTheDocument();
});