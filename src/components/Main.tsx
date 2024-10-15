import { useState, useEffect, useCallback } from "react";
import { User } from "../schemas/userSchema";
import { ContactItem } from "./ContactItem";
import { twMerge } from "tailwind-merge";
import { Modal } from "./Modal";
import { fetchUsers } from "../helpers/Main";

export const Main = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers({ setUsers, setError });
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
