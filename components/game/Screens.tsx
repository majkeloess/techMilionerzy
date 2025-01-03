import { OutlinedButton } from "../Buttons";

export const WinningScreen = ({
  earnedMoney,
  handlePlayAgain,
}: {
  earnedMoney: number;
  handlePlayAgain: () => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-white text-center text-2xl">
        Gratulacje! Wygrałeś {earnedMoney} zł!
      </h2>
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
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-white text-center text-2xl">
        Niestety, to nieprawidłowa odpowiedź. Wygrałeś gwarantowane {earnedMoney} zł!
      </h2>
      <OutlinedButton text="Zagraj ponownie" onClick={handlePlayAgain} />
    </div>
  );
};
