import GameContainer from "@/components/game/GameContainer";
import { BlurredCard } from "@/components/ui/Card";
import { getQuestionsForGame } from "@/lib/db/queries";
import { shuffleQuestionsForGame } from "@/lib/utils/questions";

export default async function GamePage() {
  const questions = await getQuestionsForGame();
  const shuffledQuestions = shuffleQuestionsForGame(questions);

  console.log(shuffledQuestions);

  return (
    <BlurredCard>
      <GameContainer questions={shuffledQuestions} />
    </BlurredCard>
  );
}
