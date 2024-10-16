import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Main } from "../components/Main";
import * as fetchUsersHelper from "../helpers/Main";

describe("Main component with real data", () => {
  test("fetches and renders users", async () => {
    render(<Main />);

    // Wait for the users to be fetched and rendered
    const contactItems = await waitFor(() =>
      screen.findAllByRole("heading", { level: 2 })
    );

    expect(contactItems.length).toBeGreaterThan(0); // Ensure at least one user is rendered
  });

  test("opens the modal when the magnifier icon is clicked", async () => {
    render(<Main />);

    const magnifierIcons = await waitFor(
      () => screen.findAllByAltText("magnifier"),
      {
        timeout: 3000,
      }
    );

    // Simulate clicking on the first magnifier icon to open the modal
    fireEvent.click(magnifierIcons[0]);

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
  });

  test("closes the modal when the close button is clicked", async () => {
    render(<Main />);

    // Wait for users to be fetched and rendered
    const magnifierIcons = await waitFor(
      () => screen.findAllByAltText("magnifier"),
      {
        timeout: 3000,
      }
    );

    fireEvent.click(magnifierIcons[0]);

    const dialogElement = await waitFor(() => screen.findByRole("dialog"), {
      timeout: 3000,
    });

    // Check that the modal is opened
    await waitFor(() => {
      expect(dialogElement).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText(/×/i));

    // Check that the modal is no longer in the document
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  test("displays an error message when there is an API error", async () => {
    // Mock fetchUsers to simulate an API error
    jest
      .spyOn(fetchUsersHelper, "fetchUsers")
      .mockImplementationOnce(({ setUsers, setError }) => {
        setError("Failed to fetch users");
        return Promise.resolve();
      });

    render(<Main />);

    // Wait for the error message to be rendered
    const errorMessage = await waitFor(() =>
      screen.findByText(/Failed to fetch users/i)
    );

    // Check that the error message is displayed
    expect(errorMessage).toBeInTheDocument();
  });
});
