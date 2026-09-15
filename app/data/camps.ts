export interface CampPeriod {
  dates: string
  age: string
}

export const camps: {
  id: string
  title: string
  subtitle: string
  description: string
  details: string[]
  periods: CampPeriod[]
  who: string | null
  photo: string | null
  buttonText: string
  formComment: string
  href: string
}[] = [
  {
    id: "anapa",
    title: "Сборы на Азовском море",
    subtitle: "Краснодарский край, Анапа · июль 2027",
    description:
      "Проводим сборы уже 6 лет подряд — каждый год выезжает от 80 до 120 спортсменов. Тренировки, режим, дисциплина, командная атмосфера — и полноценный отдых у моря всей семьёй.",
    details: [
      "Комфортные домики — кондиционер, ТВ, холодильник, санузел",
      "3-разовое питание",
      "2 бассейна и футбольное поле",
      "Открытый зал 200 м² и крытый зал 1000 м²",
      "Ринги, мешки, груши — всё для качественных тренировок",
    ],
    periods: [],
    who: "Дети, подростки, взрослые — любители и профессионалы. Сопровождающие (родители, бабушки, дедушки) приветствуются.",
    photo: null,
    buttonText: "Записаться на сборы",
    formComment: "Интересуют сборы на Азовском море",
    href: "/sboryi/azovskoe-more",
  },
  {
    id: "thailand",
    title: "Сборы в Таиланде",
    subtitle: "Родина муай-тай · март 2027",
    description:
      "Таиланд — родина муай-тай. Сборы в Таиланде позволяют спортсменам погрузиться в атмосферу тайского бокса, потренироваться в особой спортивной среде и получить новый опыт.",
    details: [],
    periods: [],
    who: null,
    photo: "/images/camps/thailand-team.jpg",
    buttonText: "Узнать о сборах в Таиланде",
    formComment: "Интересуют сборы в Таиланде",
    href: "/sboryi/tailand",
  },
]
