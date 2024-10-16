import { render, screen, fireEvent } from "@testing-library/react";
import { ContactItem } from "../components/ContactItem/ContactItem";
import type { ContactItemProps } from "types";
import type { User } from "schemas/userSchema";

export const mockUser: User = {
  id: 1,
  name: "John Doe",
  username: "johndoe",
  email: "john@example.com",
  company: {
    name: "Example Company",
  },
  address: {
    street: "123 Main St",
    city: "Springfield",
    suite: "Apt 1",
    zipcode: "12345",
  },
  phone: "555-1234",
  website: "johndoe.com",
};

describe("ContactItem component", () => {
  const openModalMock = jest.fn();

  const props: ContactItemProps = {
    user: mockUser,
    openModal: openModalMock,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("displays the user info correctly", () => {
    render(<ContactItem {...props} />);

    // Check that the user's name, email, and company are displayed
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Example Company/i)).toBeInTheDocument();
    expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
  });

  test("calls openModal when the magnifier image is clicked", () => {
    render(<ContactItem {...props} />);

    const magnifierIcon = screen.getByAltText("magnifier");
    fireEvent.click(magnifierIcon);

    expect(openModalMock).toHaveBeenCalledWith(mockUser);
  });
});
