import { OutlinedButton } from "../Buttons";

export default function AnswersList({
  answers,
  onSelect,
}: {
  answers: string[];
  onSelect: (index: number) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {answers.map((answer, index) => (
        <OutlinedButton
          key={index}
          text={answer}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
}
