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

        <div className="mt-2">
          <div>
            <p className="text-base">
              <strong>techMilionerzy</strong> to gra edukacyjna, która jest
              klonem znanej gry Milionerzy. Gracz odpowiada na 12 pytań
              dotyczących technologii informatycznych, które są losowane z
              naszej bazy danych. Po odpowiedzi na wszystkie pytania poprawnie,
              gracz otrzymuje nagrodę 1 000 000 zł. Gracz odpowiada na serię
              pytań o rosnącym poziomie trudności. Każde pytanie ma cztery
              możliwe odpowiedzi, z których tylko jedna jest poprawna. W grze
              obowiązuje progresywny system nagród - im dalej zajdziesz, tym
              większa nagroda.
            </p>
          </div>

          <p className="text-base mt-2">
            Gracz nie otrzymuje żadnej nagrody, jeśli odpowie na pytanie
            niepoprawnie. Gracz może zrezygnować z odpowiedzi przed kolejnym
            pytaniem i odebrac swoją nagrodę.
          </p>

          <p className="text-base mt-2">
            Gracz ma do dyspozycji dwa koła ratunkowe, które pomagają w
            odpowiedzi na pytania. Koło ratunkowe nazywa się 'jedna druga' i
            pozwala na zmniejszenie liczby odpowiedzi na pytania do połowy.
          </p>
        </div>
      </section>
    </BlurredCard>
  );
}
