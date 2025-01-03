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

export const shuffleQuestionsForGame = (questionArray: Question[]) => {
  const easyQuestions = questionArray.filter((question) => question.poziom === "easy");
  const mediumQuestions = questionArray.filter((question) => question.poziom === "medium");
  const hardQuestions = questionArray.filter((question) => question.poziom === "hard");

  const shuffledEasyQuestions = shuffle(easyQuestions);
  const shuffledMediumQuestions = shuffle(mediumQuestions);
  const shuffledHardQuestions = shuffle(hardQuestions);

  return [...shuffledEasyQuestions, ...shuffledMediumQuestions, ...shuffledHardQuestions];
};

export const isUserAnswerCorrect = (
  userAnswer: string,
  correctAnswer: string
) => {
  return userAnswer.toLowerCase() === correctAnswer.toLowerCase();
};
