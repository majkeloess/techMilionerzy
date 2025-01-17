"use client";
import { useState } from "react";
import QuestionGame from "@/components/game/Question";
import AnswersList from "@/components/game/AnswersList";
import { WinningScreen, LosingScreen } from "./Screens";
import { PRIZE_AMOUNTS } from "@/lib/utils/constants";
import FiftyFiftyButton from "./FiftyFiftyButton";
import { useQuestions } from "@/components/hooks/useQuestions";
import { useGameLogic } from "@/components/hooks/useGameLogic";
import { useFiftyFifty } from "@/components/hooks/useFiftyFifty";

export default function GameContainer() {
  const { questions } = useQuestions();
  const {
    currentQuestionIndex,
    gameStatus,
    earnedMoney,
    selectedAnswerIndex,
    answerState,
    handleAnswer,
    shuffledAnswers,
  } = useGameLogic(questions);

  const { fiftyFiftyCount, removedAnswers, handleFiftyFifty } = useFiftyFifty(
    questions,
    shuffledAnswers
  );

  const handlePlayAgain = () => {
    window.location.reload();
  };

  return (
    <section className="flex h-full gap-4">
      <div className="flex flex-col">
        {gameStatus === "playing" && questions.length > 0 ? (
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
              correctAnswer={questions[currentQuestionIndex]?.odp_poprawna}
            />
            <FiftyFiftyButton
              fiftyFiftyCount={fiftyFiftyCount}
              answerState={answerState}
              onFiftyFifty={() =>
                handleFiftyFifty(currentQuestionIndex, answerState)
              }
            />
          </>
        ) : gameStatus === "playing" ? (
          <div className="text-white">Loading questions...</div>
        ) : gameStatus === "won" ? (
          <WinningScreen
            earnedMoney={earnedMoney}
            handlePlayAgain={handlePlayAgain}
          />
        ) : (
          <LosingScreen
            earnedMoney={earnedMoney}
            handlePlayAgain={handlePlayAgain}
          />
        )}
      </div>
    </section>
  );
}
