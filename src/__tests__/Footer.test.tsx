import { render, screen } from "@testing-library/react";
import { Footer } from "../components/Footer";

describe("Footer component", () => {
  test("renders the correct text", () => {
    render(<Footer />);
    expect(screen.getByText(/Challenge by/i)).toBeInTheDocument();
  });
});
