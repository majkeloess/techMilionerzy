import GameContainer from "@/components/game/GameContainer";
import { getQuestionsForGame } from "@/lib/db/queries";

export default async function GamePage() {
  const questions = await getQuestionsForGame();
  console.log(questions);
  return (
    <div className="h-[100vh] w-full bg-black-900">
      <GameContainer questions={questions} />
    </div>
  );
}
