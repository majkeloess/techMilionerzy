import { AnswerState } from "@/types";

interface AnswersListProps {
  answers: string[];
  onSelect: (index: number) => void;
  selectedIndex: number | null;
  answerState: "default" | "selected" | "correct" | "wrong";
  removedAnswers: number[];
}

export default function AnswersList({
  answers,
  onSelect,
  selectedIndex,
  answerState,
  removedAnswers,
}: AnswersListProps) {
  const getAnswerClassName = (index: number) => {
    if (removedAnswers.includes(index)) {
      return "invisible";
    }

    if (index !== selectedIndex) return "bg-transparent";

    switch (answerState) {
      case "selected":
        return "bg-yellow-500";
      case "correct":
        return "bg-green-500";
      case "wrong":
        return "bg-red-500";
      default:
        return "bg-transparent";
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => {
            if (answerState === "default" && !removedAnswers.includes(index)) {
              onSelect(index);
            }
          }}
          disabled={answerState !== "default"}
          className={`p-4 text-white rounded ${getAnswerClassName(
            index
          )} border border-white bg-opacity-30`}
        >
          {answer}
        </button>
      ))}
    </div>
  );
}
