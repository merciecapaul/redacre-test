import { render, screen } from "@testing-library/react";
import { ExchangeRate } from "./ExchangeRate";

test("renders label", () => {
  render(<ExchangeRate />);
  const linkElement = screen.getByText(/Amount/i);
  expect(linkElement).toBeInTheDocument();
});