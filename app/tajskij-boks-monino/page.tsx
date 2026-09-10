import CityPage from "@/app/components/CityPage"
import { cities } from "@/app/data/cities"

export const metadata = {
  title: "Тайский бокс Монино — Клуб «Медведь», Щёлково",
  description: "Секция тайского бокса рядом с Монино. Клуб «Медведь» в Щёлково — 15 минут. Тренировки для детей и взрослых. Первое занятие бесплатно.",
  keywords: ["тайский бокс Монино", "секция тайского бокса Монино", "муай тай Монино", "единоборства Монино"],
  alternates: {
    canonical: "https://medved-club.ru/tajskij-boks-monino",
  },
}

export default function MoninoPage() {
  const city = cities.find((c) => c.slug === "tajskij-boks-monino")!
  return <CityPage city={city} />
}
