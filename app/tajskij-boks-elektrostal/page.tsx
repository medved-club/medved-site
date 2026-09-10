import CityPage from "@/app/components/CityPage"
import { cities } from "@/app/data/cities"

export const metadata = {
  title: "Тайский бокс Электросталь — Клуб «Медведь», Щёлково",
  description: "Секция тайского бокса рядом с Электросталью. Клуб «Медведь» в Щёлково — 20 минут. Тренировки для детей и взрослых. Первое занятие бесплатно.",
  keywords: ["тайский бокс Электросталь", "секция тайского бокса Электросталь", "муай тай Электросталь", "единоборства Электросталь"],
  alternates: {
    canonical: "https://medved-club.ru/tajskij-boks-elektrostal",
  },
}

export default function ElektrostalPage() {
  const city = cities.find((c) => c.slug === "tajskij-boks-elektrostal")!
  return <CityPage city={city} />
}
