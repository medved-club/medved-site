import CityPage from "@/app/components/CityPage"
import { cities } from "@/app/data/cities"

export const dynamic = "force-dynamic"

export const metadata = {
  title: "Тайский бокс Черноголовка — Клуб «Медведь», Щёлково",
  description: "Секция тайского бокса рядом с Черноголовкой. Клуб «Медведь» в Щёлково — 25 минут. Тренировки для детей и взрослых. Первое занятие бесплатно.",
  keywords: ["тайский бокс Черноголовка", "секция тайского бокса Черноголовка", "муай тай Черноголовка", "единоборства Черноголовка"],
  alternates: {
    canonical: "https://medved-club.ru/tajskij-boks-chernogolovka",
  },
}

export default function ChernogolovkaPage() {
  const city = cities.find((c) => c.slug === "tajskij-boks-chernogolovka")!
  return <CityPage city={city} />
}
