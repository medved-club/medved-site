import CityPage from "@/app/components/CityPage"
import { cities } from "@/app/data/cities"

export const dynamic = "force-dynamic"

export const metadata = {
  title: "Тайский бокс Фрязево — Клуб «Медведь», Щёлково",
  description: "Секция тайского бокса рядом с Фрязево. Клуб «Медведь» в Щёлково — 15–20 минут. Тренировки для детей и взрослых. Первое занятие бесплатно.",
  keywords: ["тайский бокс Фрязево", "секция тайского бокса Фрязево", "муай тай Фрязево"],
  alternates: {
    canonical: "https://medved-club.ru/tajskij-boks-fryazevo",
  },
}

export default function FryazevoPage() {
  const city = cities.find((c) => c.slug === "tajskij-boks-fryazevo")!
  return <CityPage city={city} />
}
