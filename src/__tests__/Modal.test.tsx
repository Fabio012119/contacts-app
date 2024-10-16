import { render, screen } from "@testing-library/react";
import { Modal } from "../components/Modal/Modal";
import { mockUser } from "./ContactItem.test";
import { ModalProps } from "types";

describe("Modal component", () => {
  const mockCloseModal = jest.fn();

  const props: ModalProps = {
    user: mockUser,
    closeModal: mockCloseModal,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the modal and displays the user information", () => {
    render(<Modal {...props} />);

    // Check that the modal is rendered
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    // Check that the user information is correctly displayed
    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    expect(screen.getByText(mockUser.company.name)).toBeInTheDocument();
    expect(screen.getByText(mockUser.username)).toBeInTheDocument();
    expect(screen.getByText(mockUser.address.street)).toBeInTheDocument();
    expect(screen.getByText(mockUser.address.city)).toBeInTheDocument();
    expect(screen.getByText(mockUser.address.suite)).toBeInTheDocument();
    expect(screen.getByText(mockUser.phone)).toBeInTheDocument();
    expect(screen.getByText(mockUser.email)).toBeInTheDocument();
    expect(screen.getByText(mockUser.website)).toBeInTheDocument();
  });
});
