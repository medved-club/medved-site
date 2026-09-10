import CityPage from "@/app/components/CityPage"
import { cities } from "@/app/data/cities"

export const metadata = {
  title: "Тайский бокс Ногинск — Клуб «Медведь», Щёлково",
  description: "Секция тайского бокса рядом с Ногинском. Клуб «Медведь» в Щёлково — 30–35 минут. Тренировки для детей и взрослых. Первое занятие бесплатно.",
  keywords: ["тайский бокс Ногинск", "секция тайского бокса Ногинск", "муай тай Ногинск", "единоборства Ногинск"],
  alternates: {
    canonical: "https://medved-club.ru/tajskij-boks-noginsk",
  },
}

export default function NoginskoPage() {
  const city = cities.find((c) => c.slug === "tajskij-boks-noginsk")!
  return <CityPage city={city} />
}
