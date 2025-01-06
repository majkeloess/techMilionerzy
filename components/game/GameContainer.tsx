"use client";
import { useState, useEffect } from "react";
import QuestionGame from "@/components/game/Question";
import AnswersList from "@/components/game/AnswersList";
import type { Question } from "@/types";
import { isUserAnswerCorrect, shuffleAnswers } from "@/lib/utils/questions";
import { WinningScreen, LosingScreen } from "./Screens";
import { PRIZE_AMOUNTS } from "@/lib/utils/constants";
import FiftyFiftyButton from "./FiftyFiftyButton";

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
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [answerState, setAnswerState] = useState<
    "default" | "selected" | "correct" | "wrong"
  >("default");
  const [fiftyFiftyCount, setFiftyFiftyCount] = useState(2);
  const [removedAnswers, setRemovedAnswers] = useState<number[]>([]);

  useEffect(() => {
    const currentQuestion = questions[currentQuestionIndex];
    setShuffledAnswers(shuffleAnswers(currentQuestion));
    setRemovedAnswers([]);
  }, [currentQuestionIndex, questions]);

  const handleAnswer = async (selectedIndex: number) => {
    setSelectedAnswerIndex(selectedIndex);
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
      setAnswerState("wrong");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setGameStatus("lost");
    }
  };

  const handlePlayAgain = () => {
    window.location.reload();
  };

  const handleFiftyFifty = () => {
    if (fiftyFiftyCount <= 0 || answerState !== "default") return;

    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswerIndex = shuffledAnswers.findIndex((answer) =>
      isUserAnswerCorrect(answer, currentQuestion.odp_poprawna)
    );

    const wrongAnswerIndices = shuffledAnswers
      .map((answer, index) => ({
        index,
        isWrong: !isUserAnswerCorrect(answer, currentQuestion.odp_poprawna),
      }))
      .filter((item) => item.isWrong)
      .map((item) => item.index);

    const shuffledWrongIndices = wrongAnswerIndices.sort(
      () => Math.random() - 0.5
    );
    const indicesToRemove = shuffledWrongIndices.slice(0, 2);

    setRemovedAnswers(indicesToRemove);
    setFiftyFiftyCount((prev) => prev - 1);
  };

  return (
    <section className="flex h-full gap-4">
      <div className="flex flex-col">
        {gameStatus === "playing" && (
          <>
            <QuestionGame
              question={questions[currentQuestionIndex]}
              questionNumber={currentQuestionIndex + 1}
              prize={PRIZE_AMOUNTS[currentQuestionIndex]}
            />
            <AnswersList
              answers={shuffledAnswers}
              onSelect={handleAnswer}
              selectedIndex={selectedAnswerIndex}
              answerState={answerState}
              removedAnswers={removedAnswers}
            />
            <FiftyFiftyButton
              fiftyFiftyCount={fiftyFiftyCount}
              answerState={answerState}
              onFiftyFifty={handleFiftyFifty}
            />
          </>
        )}
        {gameStatus === "won" && (
          <WinningScreen
            earnedMoney={earnedMoney}
            handlePlayAgain={handlePlayAgain}
          />
        )}
        {gameStatus === "lost" && (
          <LosingScreen
            earnedMoney={earnedMoney}
            handlePlayAgain={handlePlayAgain}
          />
        )}
      </div>
    </section>
  );
}
