import { User } from "../schemas/userSchema";
import magnifierIcon from "../assets/icon-supervisor.svg";
import { twMerge } from "tailwind-merge";

type ContactItemProps = {
  user: User;
  openModal: (user: User) => void;
};

export const ContactItem = ({ user, openModal }: ContactItemProps) => {
  return (
    <div
      className={twMerge(
        "bg-white rounded-lg shadow-lg hover:shadow-2xl hover:translate-y-[-5%]",
        "transition-transform border-primary-cyan border-t-2",
        "smMin:w-[50%] lgMin:w-[100%] p-[2rem] flex flex-col w-[90%]"
      )}
    >
      <h2 className="font-bold text-neutral-very-dark-blue text-xl mb-[1rem] smMax:text-left">
        {user.name}
      </h2>
      <p className="text-neutral-grayish-blue smMax:text-left">
        Company:{" "}
        <span className="font-bold text-neutral-grayish-blue">
          {user.company.name}
        </span>
      </p>
      <p className="text-neutral-grayish-blue smMax:text-left">
        E-mail:{" "}
        <span className="font-bold text-neutral-grayish-blue">
          {user.email}
        </span>
      </p>
      <img
        src={magnifierIcon}
        alt="magnifier"
        className="w-[3rem] h-[3rem] mt-8 ml-auto cursor-pointer"
        onClick={() => openModal(user)}
      />
    </div>
  );
};
