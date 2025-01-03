"use client";

import { BlurredCard } from "@/components/ui/Card";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function RulesPage() {
  const router = useRouter();

  return (
    <BlurredCard>
      <section className="max-w-3xl">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Zasady</h1>
          <button onClick={() => router.back()}>
            <IconArrowLeft width={40} height={40} />
          </button>
        </div>

        <div className="mt-4">
          <div>
            <p className="text-base">
              <strong>techMilionerzy</strong> to gra edukacyjna, która jest
              klonem znanej gry Milionerzy. Gracz odpowiada na 12 pytań
              dotyczących technologii informatycznych, które są losowane z
              naszej bazy danych. Po odpowiedzi na wszystkie pytania poprawnie,
              gracz otrzymuje nagrodę 1 000 000 zł.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-1">Struktura gry</h2>
            <p className="text-base">
              Gracz odpowiada na serię pytań o rosnącym poziomie trudności.
              Każde pytanie ma cztery możliwe odpowiedzi, z których tylko jedna
              jest poprawna. W grze obowiązuje progresywny system nagród - im
              dalej zajdziesz, tym większa nagroda.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-1">Nagrody</h2>
            <p className="text-base">
              Gracz nie otrzymuje żadnej nagrody, jeśli odpowie na pytanie
              niepoprawnie. Gracz może zrezygnować z odpowiedzi przed kolejnym
              pytaniem i odebrac swoją nagrodę.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-1">Koła ratunkowe</h2>
            <p className="text-base">
              Gracz ma do dyspozycji koła ratunkowe, które pomagają w odpowiedzi
              na pytania.
            </p>
            <ul className="list-disc pl-4">
              <li>
                <strong>50/50</strong> - Gracz ma 50% szans na odpowiedź
                poprawną.
              </li>
              <li>
                <strong>Pomoc eksperta</strong> - ekspert pomaga w odpowiedzi na
                pytanie.
              </li>
              <li>
                <strong>Pytanie do publiczności</strong> - publiczność pomaga
                odpowiadać na pytanie.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </BlurredCard>
  );
}
