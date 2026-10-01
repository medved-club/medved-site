import CityPage from "@/app/components/CityPage"
import { cities } from "@/app/data/cities"

export const dynamic = "force-dynamic"

export const metadata = {
  title: "Тайский бокс Мытищи — Клуб «Медведь», Щёлково",
  description: "Секция тайского бокса рядом с Мытищами. Клуб «Медведь» в Щёлково — 30 минут. Тренировки для детей и взрослых. Первое занятие бесплатно.",
  keywords: ["тайский бокс Мытищи", "секция тайского бокса Мытищи", "муай тай Мытищи", "единоборства Мытищи"],
  alternates: {
    canonical: "https://medved-club.ru/tajskij-boks-mytishchi",
  },
}

export default function MytishchiPage() {
  const city = cities.find((c) => c.slug === "tajskij-boks-mytishchi")!
  return <CityPage city={city} />
}
