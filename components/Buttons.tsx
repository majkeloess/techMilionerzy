export const OutlinedButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <button
      className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-white text-white rounded-lg font-bold whitespace-normal break-words"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
