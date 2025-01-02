interface AnswersListProps {
  answers: string[];
  onSelect: (index: number) => void;
}

export default function AnswersList({ answers, onSelect }: AnswersListProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className="bg-slate-700 hover:bg-slate-600 text-white p-4 rounded-lg transition-colors"
        >
          {String.fromCharCode(65 + index)}. {answer}
        </button>
      ))}
    </div>
  );
}
