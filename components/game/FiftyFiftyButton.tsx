import { AnswerState } from "@/types";
import { IconMath1Divide2 } from "@tabler/icons-react";

interface FiftyFiftyButtonProps {
  fiftyFiftyCount: number;
  answerState: AnswerState;
  onFiftyFifty: () => void;
}

export default function FiftyFiftyButton({
  fiftyFiftyCount,
  answerState,
  onFiftyFifty,
}: FiftyFiftyButtonProps) {
  return (
    <div className="mt-8 flex justify-center">
      <button
        onClick={onFiftyFifty}
        disabled={fiftyFiftyCount <= 0 || answerState !== "default"}
        className={`px-4 py-2 flex items-center gap-2 font-bold rounded border border-white bg-transparent ${
          fiftyFiftyCount > 0 ? "" : "bg-gray-400"
        } text-white`}
      >
        <IconMath1Divide2 /> {fiftyFiftyCount}
      </button>
    </div>
  );
}
