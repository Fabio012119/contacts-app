import magnifierIcon from "assets/icon-supervisor.svg";
import { twMerge } from "tailwind-merge";
import type { ContactItemProps } from "types";
import { ContactInfoItem } from "./ContactInfoItem";

export const ContactItem = ({ user, openModal }: ContactItemProps) => {
  return (
    <div
      className={twMerge(
        "bg-white rounded-lg shadow-2xl hover:translate-y-[-5%]",
        "transition-transform border-primary-cyan border-t-[0.2rem]",
        "smMin:w-[70%] lgMin:w-[100%] p-[2rem] flex flex-col w-[90%]"
      )}
    >
      <h2 className="font-bold text-neutral-very-dark-blue text-xl mb-[1rem] smMax:text-left">
        {user.name}
      </h2>
      <ContactInfoItem label="Company:" value={user.company.name} />
      <ContactInfoItem label="E-mail:" value={user.email} />
      <img
        src={magnifierIcon}
        alt="magnifier"
        className="w-[3rem] h-[3rem] mt-8 ml-auto cursor-pointer"
        onClick={() => openModal(user)}
      />
    </div>
  );
};
