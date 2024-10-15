import type { modalAnimationClassProps } from "../types";

export const animationClass = ({
  isVisible,
  isClosing,
}: modalAnimationClassProps) => {
  return `${
    isVisible && !isClosing
      ? "translate-y-0 opacity-100"
      : isClosing
      ? "-translate-y-full opacity-0"
      : "translate-y-full opacity-0"
  }`;
};
