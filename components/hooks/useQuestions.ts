import { useState, useEffect } from "react";
import { shuffleQuestionsForGame } from "@/lib/utils/questions";
import { Question } from "@/types";

export function useQuestions() {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const fetchAndSetupQuestions = async () => {
      try {
        const response = await fetch(
          `https://api.majkeloess.dev/techmilionerzy/questions?key=${process.env.NEXT_PUBLIC_MAJKELOESS}`
        );

        const data = await response.json();
        const shuffledQuestions = shuffleQuestionsForGame(data);
        setQuestions(shuffledQuestions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchAndSetupQuestions();
  }, []);

  return { questions };
}
