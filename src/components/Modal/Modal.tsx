import { useEffect, useState } from "react";
import { ModalInfoItem } from "./ModalInfoItem";
import { twMerge } from "tailwind-merge";
import { animationClass } from "../../helpers/Modal";
import type { ModalProps } from "../../types";

export const Modal = ({ user, closeModal }: ModalProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
    }, 500);
  };

  const modalAnimationClass = animationClass({ isVisible, isClosing });

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50"
      onClick={handleClose}
    >
      <div className="fixed inset-0 flex justify-center items-center">
        <div
          className={twMerge(
            "bg-white fixed p-8 shadow-lg w-6/12 smMax:w-[90%] border-b-4 top-[4rem]",
            "border-b-primary-cyan transform transition-all duration-500 ease-in-out",
            modalAnimationClass
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 font-black text-[1.3rem] text-neutral-grayish-blue"
            onClick={handleClose}
          >
            ×
          </button>

          <div className="mb-6 lgMax:text-start">
            <h2 className="text-2xl font-bold text-neutral-very-dark-blue">
              {user.name}
            </h2>
            <p className="text-neutral-grayish-blue">{user.company.name}</p>
          </div>

          <div className="flex flex-row p-4 justify-between lgMax:flex-col lgMax:items-start lgMax:text-start lgMax:gap-2">
            <ModalInfoItem label="Username:" infos={[user.username]} />
            <ModalInfoItem
              label="Address:"
              infos={[
                user.address.street,
                user.address.city,
                user.address.suite,
              ]}
            />
            <ModalInfoItem label="Phone:" infos={[user.phone]} />
            <div className="lgMax:[&>div]:mb-2">
              <ModalInfoItem label="Email:" infos={[user.email]} />
              <ModalInfoItem label="Website:" infos={[user.website]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
