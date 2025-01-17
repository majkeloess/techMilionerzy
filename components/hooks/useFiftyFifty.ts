import { useState, useEffect } from "react";
import { isUserAnswerCorrect } from "@/lib/utils/questions";
import type { Question } from "@/types";

export function useFiftyFifty(
  questions: Question[],
  shuffledAnswers: string[]
) {
  const [fiftyFiftyCount, setFiftyFiftyCount] = useState(2);
  const [fiftyFiftyUsedForQuestion, setFiftyFiftyUsedForQuestion] =
    useState(false);
  const [removedAnswers, setRemovedAnswers] = useState<number[]>([]);

  useEffect(() => {
    setRemovedAnswers([]);
    setFiftyFiftyUsedForQuestion(false);
  }, [questions, shuffledAnswers]);

  const handleFiftyFifty = (
    currentQuestionIndex: number,
    answerState: string
  ) => {
    if (
      fiftyFiftyCount <= 0 ||
      answerState !== "default" ||
      fiftyFiftyUsedForQuestion
    )
      return;

    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswerIndex = shuffledAnswers.findIndex((answer) =>
      isUserAnswerCorrect(answer, currentQuestion.odp_poprawna)
    );

    const wrongAnswerIndices = shuffledAnswers
      .map((_, index) => index)
      .filter((index) => index !== correctAnswerIndex);

    const shuffledWrongIndices = wrongAnswerIndices.sort(
      () => Math.random() - 0.5
    );
    const indicesToRemove = shuffledWrongIndices.slice(0, 2);

    setRemovedAnswers(indicesToRemove);
    setFiftyFiftyCount((prev) => prev - 1);
    setFiftyFiftyUsedForQuestion(true);
  };

  return {
    fiftyFiftyCount,
    fiftyFiftyUsedForQuestion,
    removedAnswers,
    handleFiftyFifty,
    setFiftyFiftyUsedForQuestion,
  };
}
