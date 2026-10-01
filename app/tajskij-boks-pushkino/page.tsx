import CityPage from "@/app/components/CityPage"
import { cities } from "@/app/data/cities"

export const dynamic = "force-dynamic"

export const metadata = {
  title: "Тайский бокс Пушкино — Клуб «Медведь», Щёлково",
  description: "Секция тайского бокса рядом с Пушкино. Клуб «Медведь» в Щёлково — 20–25 минут. Тренировки для детей и взрослых. Первое занятие бесплатно.",
  keywords: ["тайский бокс Пушкино", "секция тайского бокса Пушкино", "муай тай Пушкино", "единоборства Пушкино"],
  alternates: {
    canonical: "https://medved-club.ru/tajskij-boks-pushkino",
  },
}

export default function PushkinoPage() {
  const city = cities.find((c) => c.slug === "tajskij-boks-pushkino")!
  return <CityPage city={city} />
}
