import CityPage from "@/app/components/CityPage"
import { cities } from "@/app/data/cities"

export const metadata = {
  title: "Тайский бокс Железнодорожный — Клуб «Медведь»",
  description: "Секция тайского бокса рядом с Железнодорожным. Клуб «Медведь» в Щёлково — 20 минут. Тренировки для детей и взрослых. Первое занятие бесплатно.",
  keywords: ["тайский бокс Железнодорожный", "муай тай Железнодорожный", "секция бокса Железнодорожный"],
  alternates: {
    canonical: "https://medved-club.ru/tajskij-boks-zheleznodorozhnyj",
  },
}

export default function ZheleznodorozhnyPage() {
  const city = cities.find((c) => c.slug === "tajskij-boks-zheleznodorozhnyj")!
  return <CityPage city={city} />
}
