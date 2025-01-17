import { useState, useEffect } from "react";
import { PRIZE_AMOUNTS } from "@/lib/utils/constants";
import { isUserAnswerCorrect, shuffleAnswers } from "@/lib/utils/questions";
import type { Question } from "@/types";

export function useGameLogic(questions: Question[]) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">(
    "playing"
  );
  const [earnedMoney, setEarnedMoney] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [answerState, setAnswerState] = useState<
    "default" | "selected" | "correct" | "wrong" | "wrong-with-correct"
  >("default");
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);

  // Aktualizuj odpowiedzi przy zmianie pytania
  useEffect(() => {
    if (questions.length > 0) {
      setShuffledAnswers(shuffleAnswers(questions[currentQuestionIndex]));
    }
  }, [questions, currentQuestionIndex]);

  const handleAnswer = async (selectedIndex: number) => {
    const wrongAnswerIndex = selectedIndex;
    setSelectedAnswerIndex(wrongAnswerIndex);
    setAnswerState("selected");

    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = shuffledAnswers[selectedIndex];

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const isCorrect = isUserAnswerCorrect(
      selectedAnswer,
      currentQuestion.odp_poprawna
    );

    if (isCorrect) {
      setAnswerState("correct");
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (currentQuestionIndex === questions.length - 1) {
        setGameStatus("won");
        setEarnedMoney(PRIZE_AMOUNTS[currentQuestionIndex]);
      } else {
        setCurrentQuestionIndex((prev) => prev + 1);
        setEarnedMoney(PRIZE_AMOUNTS[currentQuestionIndex]);
        setAnswerState("default");
        setSelectedAnswerIndex(null);
      }
    } else {
      setAnswerState("wrong-with-correct");
      setSelectedAnswerIndex(wrongAnswerIndex);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setGameStatus("lost");
    }
  };

  return {
    currentQuestionIndex,
    gameStatus,
    earnedMoney,
    selectedAnswerIndex,
    answerState,
    handleAnswer,
    shuffledAnswers,
  };
}
