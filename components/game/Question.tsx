interface QuestionGameProps {
  question: string;
  questionNumber: number;
}

export default function QuestionGame({
  question,
  questionNumber,
}: QuestionGameProps) {
  return (
    <div className="bg-slate-700 p-6 rounded-lg mb-4">
      <h2 className="text-white text-xl">
        Pytanie {questionNumber}: {question}
      </h2>
    </div>
  );
}
