import type { modalInfoProps } from "../types";

export const ModalInfoItem = ({ infos, label }: modalInfoProps) => {
  return (
    <div>
      <strong className="mb-1">{label}</strong>
      {infos.map((info: string, infoIndex: number) => {
        return <p key={infoIndex}>{info}</p>;
      })}
    </div>
  );
};
