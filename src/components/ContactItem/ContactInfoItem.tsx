import type { ContactInfoItemProps } from "types";

export const ContactInfoItem = ({ label, value }: ContactInfoItemProps) => {
  return (
    <p className="text-neutral-grayish-blue smMax:text-left">
      {label}{" "}
      <span className="font-bold text-neutral-grayish-blue">{value}</span>
    </p>
  );
};
