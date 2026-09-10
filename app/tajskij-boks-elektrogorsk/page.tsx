import CityPage from "@/app/components/CityPage"
import { cities } from "@/app/data/cities"

export const metadata = {
  title: "Тайский бокс Электрогорск — Клуб «Медведь», Щёлково",
  description: "Секция тайского бокса рядом с Электрогорском. Клуб «Медведь» в Щёлково — 35–40 минут. Тренировки для детей и взрослых. Первое занятие бесплатно.",
  keywords: ["тайский бокс Электрогорск", "секция тайского бокса Электрогорск", "муай тай Электрогорск"],
  alternates: {
    canonical: "https://medved-club.ru/tajskij-boks-elektrogorsk",
  },
}

export default function ElektrogorskPage() {
  const city = cities.find((c) => c.slug === "tajskij-boks-elektrogorsk")!
  return <CityPage city={city} />
}
