import CityPage from "@/app/components/CityPage"
import { cities } from "@/app/data/cities"

export const metadata = {
  title: "Тайский бокс Королёв — Клуб «Медведь», Щёлково",
  description: "Секция тайского бокса рядом с Королёвым. Клуб «Медведь» в Щёлково — 20 минут. Тренировки для детей и взрослых. Первое занятие бесплатно.",
  keywords: ["тайский бокс Королёв", "секция тайского бокса Королёв", "муай тай Королёв", "единоборства Королёв"],
  alternates: {
    canonical: "https://medved-club.ru/tajskij-boks-korolev",
  },
}

export default function KorolevPage() {
  const city = cities.find((c) => c.slug === "tajskij-boks-korolev")!
  return <CityPage city={city} />
}
