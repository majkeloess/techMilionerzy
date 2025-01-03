import type { Question } from "@/types";
import {
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandHtml5,
} from "@tabler/icons-react";

const chooseIcon = (temat: string) => {
  switch (temat) {
    case "HTML":
      return IconBrandHtml5;
    case "CSS":
      return IconBrandCss3;
    case "JavaScript":
      return IconBrandJavascript;
    case "TypeScript":
      return IconBrandTypescript;
    case "Node.js":
      return IconBrandNodejs;
    case "React.js":
      return IconBrandReact;
    case "Next.js":
      return IconBrandNextjs;
    default:
      return IconBrandHtml5;
  }
};

export default function QuestionGame({
  question,
  questionNumber,
}: {
  question: Question;
  questionNumber: number;
}) {
  const Icon = chooseIcon(question.temat);

  return (
    <div
      className="shadow-[0_0_0_3px_#000000_inset] bg-transparent border border-white
     p-6 rounded-lg mb-4 transform hover:-translate-y-1 transition duration-400"
    >
      <div className="flex items-center gap-2">
        <h4 className="text-white text-lg">Pytanie {questionNumber}</h4>
        <span className="w-1 h-1 bg-white rounded-full"></span>
        <Icon width={32} height={32} />
      </div>
      <h3 className="text-white text-xl">{question.pytanie}</h3>
    </div>
  );
}
