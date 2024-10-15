import { useState, useEffect, useCallback } from "react";
import { userSchema, User } from "../schemas/userSchema";
import { ContactItem } from "./ContactItem";
import { twMerge } from "tailwind-merge";
import { Modal } from "./Modal";

export const Main = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users?_start=0&_limit=6"
        );
        if (!response.ok) throw new Error("Failed to fetch users");

        const data = await response.json();

        const parsedData = data.map((user: User) => userSchema.parse(user));
        setUsers(parsedData);
      } catch (err) {
        setError((err as Error).message);
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  const handleOpenModal = useCallback((user: User) => {
    setSelectedUser(user);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedUser(null);
  }, []);

  // Handle modal accessibility (e.g., close on "Escape" key press)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    if (selectedUser) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedUser, handleCloseModal]);

  return (
    <div
      className={twMerge(
        "w-full smMax:text-center smMin:justify-items-center",
        "lgMax:justify-items-center smMax:items-center smMin:grid",
        "smMin:grid-cols-1 lgMin:grid-cols-3 smMax:flex",
        "smMax:flex-col gap-6 lgMax:w-full lgMin:px-[15%]"
      )}
    >
      {error ? <p className="text-red-600 text-center">Error: {error}</p> : ""}

      {users.map((user) => (
        <ContactItem key={user.id} user={user} openModal={handleOpenModal} />
      ))}

      {selectedUser && (
        <Modal user={selectedUser} closeModal={handleCloseModal} />
      )}
    </div>
  );
};
