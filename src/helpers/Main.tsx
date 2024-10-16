import { userSchema, User } from "schemas/userSchema";

type FetchUserProps = {
  setUsers: (users: User[]) => void;
  setError: (error: string) => void;
};

export const fetchUsers = async ({
  setUsers,
  setError,
}: FetchUserProps): Promise<void> => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users?_start=0&_limit=6"
    );

    if (!response.ok) throw new Error("Failed to fetch users");

    const data = await response.json();

    const parsedData = data.map((user: unknown) => userSchema.parse(user));
    setUsers(parsedData);
  } catch (err) {
    const errorMessage = (err as Error).message || "An error occurred";
    setError(errorMessage);
    console.error(errorMessage);
  }
};
