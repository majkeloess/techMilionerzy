import { OutlinedButton } from "../Buttons";

export const WinningScreen = ({
  earnedMoney,
  handlePlayAgain,
}: {
  earnedMoney: number;
  handlePlayAgain: () => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <h3 className="text-white text-center text-xl">Gratulacje! Wygrałeś</h3>
      <h2 className="text-white text-center text-4xl">{earnedMoney} zł</h2>
      <OutlinedButton text="Zagraj ponownie" onClick={handlePlayAgain} />
    </div>
  );
};

export const LosingScreen = ({
  earnedMoney,
  handlePlayAgain,
}: {
  earnedMoney: number;
  handlePlayAgain: () => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <h3 className="text-white text-center text-xl">
        Niestety, to nieprawidłowa odpowiedź. Wygrałeś gwarantowane{" "}
      </h3>
      <h2 className="text-white text-center text-4xl">{earnedMoney} zł</h2>
      <OutlinedButton text="Zagraj ponownie" onClick={handlePlayAgain} />
    </div>
  );
};
