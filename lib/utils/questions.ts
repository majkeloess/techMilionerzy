import { Question } from "@/types";

const shuffle = <T>(array: T[]) => {
  return array.sort(() => Math.random() - 0.5);
};

export const shuffleAnswers = (question: Question) => {
  const answers = [
    question.odp_a,
    question.odp_b,
    question.odp_c,
    question.odp_d,
  ];

  return shuffle(answers);
};

export const shuffleQuestions = (questionArray: Question[]) => {
  return shuffle(questionArray);
};

export const isUserAnswerCorrect = (
  userAnswer: string,
  correctAnswer: string
) => {
  return userAnswer.toLowerCase() === correctAnswer.toLowerCase();
};
