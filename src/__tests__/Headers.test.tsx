import { render, screen } from "@testing-library/react";
import { Headers } from "../components/Headers";

describe("Headers component", () => {
    test('renders the correct texts', async () => {
        render(<Headers />);
    

    //Check it renders the correct texts
    expect(screen.getByText(/CSS, Javascript, API/i)).toBeInTheDocument();
    expect(screen.getByText(/Contacts Application/i)).toBeInTheDocument();
    expect(
      screen.getByText(/View basic info of contacts in a 3x2 layout/i)
    ).toBeInTheDocument();
  });
});
