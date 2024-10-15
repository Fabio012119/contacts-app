import { User } from "../schemas/userSchema";

export type ContactItemProps = {
  user: User;
  openModal: (user: User) => void;
};

export type ModalProps = {
  user: User;
  closeModal: () => void;
};

export type modalInfoProps = {
  infos: string[];
  label: string;
};
