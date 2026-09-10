import CityPage from "@/app/components/CityPage"
import { cities } from "@/app/data/cities"

export const metadata = {
  title: "Тайский бокс Фрязино — Клуб «Медведь», Щёлково",
  description: "Секция тайского бокса рядом с Фрязино. Клуб «Медведь» в Щёлково — 10–15 минут от Фрязино. Тренировки для детей и взрослых. Первое занятие бесплатно.",
  keywords: ["тайский бокс Фрязино", "секция тайского бокса Фрязино", "муай тай Фрязино", "единоборства Фрязино"],
  alternates: {
    canonical: "https://medved-club.ru/tajskij-boks-fryazino",
  },
}

export default function FryazinoPage() {
  const city = cities.find((c) => c.slug === "tajskij-boks-fryazino")!
  return <CityPage city={city} />
}
