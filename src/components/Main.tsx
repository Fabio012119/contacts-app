import { useState, useEffect } from "react";
import { User } from "schemas/userSchema";
import { ContactItem } from "./ContactItem/ContactItem";
import { twMerge } from "tailwind-merge";
import { Modal } from "./Modal/Modal";
import { fetchUsers } from "helpers/Main";

export const Main = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers({ setUsers, setError });
  }, []);

  const handleOpenModal = (user: User) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div
      className={twMerge(
        "w-full smMax:text-center smMin:justify-items-center",
        "lgMax:justify-items-center smMax:items-center smMin:grid",
        "smMin:grid-cols-1 lgMin:grid-cols-3 smMax:flex",
        "smMax:flex-col gap-6 lgMax:w-full lgMin:px-[15%]"
      )}
    >
      {error ? (
        <p className="text-red-600 text-center">Error: {error}</p>
      ) : (
        <>
          {users.map((user) => (
            <ContactItem
              key={user.id}
              user={user}
              openModal={handleOpenModal}
            />
          ))}

          {selectedUser && (
            <Modal user={selectedUser} closeModal={handleCloseModal} />
          )}
        </>
      )}
    </div>
  );
};
