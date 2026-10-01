import CityPage from "@/app/components/CityPage"
import { cities } from "@/app/data/cities"

export const dynamic = "force-dynamic"

export const metadata = {
  title: "Тайский бокс Балашиха — Клуб «Медведь», Щёлково",
  description: "Секция тайского бокса рядом с Балашихой. Клуб «Медведь» в Щёлково — 25–30 минут. Тренировки для детей и взрослых. Первое занятие бесплатно.",
  keywords: ["тайский бокс Балашиха", "секция тайского бокса Балашиха", "муай тай Балашиха", "единоборства Балашиха"],
  alternates: {
    canonical: "https://medved-club.ru/tajskij-boks-balashiha",
  },
}

export default function BalashihaPage() {
  const city = cities.find((c) => c.slug === "tajskij-boks-balashiha")!
  return <CityPage city={city} />
}
