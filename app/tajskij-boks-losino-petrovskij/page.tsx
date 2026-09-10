import CityPage from "@/app/components/CityPage"
import { cities } from "@/app/data/cities"

export const metadata = {
  title: "Тайский бокс Лосино-Петровский — Клуб «Медведь»",
  description: "Секция тайского бокса рядом с Лосино-Петровским. Клуб «Медведь» в Щёлково — 10 минут. Тренировки для детей и взрослых. Первое занятие бесплатно.",
  keywords: ["тайский бокс Лосино-Петровский", "муай тай Лосино-Петровский", "секция бокса Лосино-Петровский"],
  alternates: {
    canonical: "https://medved-club.ru/tajskij-boks-losino-petrovskij",
  },
}

export default function LosinoPetrovskijPage() {
  const city = cities.find((c) => c.slug === "tajskij-boks-losino-petrovskij")!
  return <CityPage city={city} />
}
