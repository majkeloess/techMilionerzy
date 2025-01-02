"use client";
import { useState } from "react";
import QuestionGame from "@/components/game/Question";
import AnswersList from "@/components/game/AnswersList";
import PrizeLadder from "@/components/game/PrizeLadder";
import type { Question } from "@/types";

const PRIZE_AMOUNTS = [
  500, 1000, 2000, 5000, 10000, 20000, 40000, 75000, 125000, 250000, 500000,
  1000000,
];

export default function GameContainer({
  questions,
}: {
  questions: Question[];
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">(
    "playing"
  );
  const [earnedMoney, setEarnedMoney] = useState(0);

  const handleAnswer = (selectedIndex: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = [
      currentQuestion.odp_a,
      currentQuestion.odp_b,
      currentQuestion.odp_c,
      currentQuestion.odp_d,
    ][selectedIndex];

    const isCorrect = selectedAnswer === currentQuestion.odp_poprawna;

    if (isCorrect) {
      if (currentQuestionIndex === questions.length - 1) {
        setGameStatus("won");
        setEarnedMoney(PRIZE_AMOUNTS[currentQuestionIndex]);
      } else {
        setCurrentQuestionIndex((prev) => prev + 1);
        setEarnedMoney(PRIZE_AMOUNTS[currentQuestionIndex]);
      }
    } else {
      setGameStatus("lost");
    }
  };

  return (
    <div className="flex h-full gap-4">
      <div className="flex-1">
        {gameStatus === "playing" && (
          <>
            <QuestionGame
              question={questions[currentQuestionIndex].pytanie}
              questionNumber={currentQuestionIndex + 1}
            />
            <AnswersList
              answers={[
                questions[currentQuestionIndex].odp_a,
                questions[currentQuestionIndex].odp_b,
                questions[currentQuestionIndex].odp_c,
                questions[currentQuestionIndex].odp_d,
              ]}
              onSelect={handleAnswer}
            />
          </>
        )}
        {gameStatus === "won" && (
          <div className="text-white text-center">
            <h2>Gratulacje! Wygrałeś {earnedMoney} zł!</h2>
          </div>
        )}
        {gameStatus === "lost" && (
          <div className="text-white text-center">
            <h2>
              Niestety, to nieprawidłowa odpowiedź. Wygrałeś {earnedMoney} zł!
            </h2>
          </div>
        )}
      </div>
      <PrizeLadder
        amounts={PRIZE_AMOUNTS}
        currentLevel={currentQuestionIndex}
      />
    </div>
  );
}
