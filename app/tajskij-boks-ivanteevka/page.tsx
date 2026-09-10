import CityPage from "@/app/components/CityPage"
import { cities } from "@/app/data/cities"

export const metadata = {
  title: "Тайский бокс Ивантеевка — Клуб «Медведь», Щёлково",
  description: "Секция тайского бокса рядом с Ивантеевкой. Клуб «Медведь» в Щёлково — 15 минут. Тренировки для детей и взрослых. Первое занятие бесплатно.",
  keywords: ["тайский бокс Ивантеевка", "секция тайского бокса Ивантеевка", "муай тай Ивантеевка", "единоборства Ивантеевка"],
  alternates: {
    canonical: "https://medved-club.ru/tajskij-boks-ivanteevka",
  },
}

export default function IvanteevkaPage() {
  const city = cities.find((c) => c.slug === "tajskij-boks-ivanteevka")!
  return <CityPage city={city} />
}
