interface PrizeLadderProps {
  amounts: number[];
  currentLevel: number;
}

export default function PrizeLadder({
  amounts,
  currentLevel,
}: PrizeLadderProps) {
  return (
    <div className="w-48 bg-slate-700 p-4 rounded-lg">
      <h3 className="text-white text-lg mb-4">Wygrane:</h3>
      <div className="flex flex-col-reverse">
        {amounts.map((amount, index) => (
          <div
            key={index}
            className={`p-2 mb-2 rounded ${
              index === currentLevel
                ? "bg-blue-500 text-white"
                : "bg-slate-600 text-gray-300"
            }`}
          >
            {amount} zł
          </div>
        ))}
      </div>
    </div>
  );
}
