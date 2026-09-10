export type GalleryCategory =
  | "all"
  | "hall"
  | "group"
  | "personal"
  | "split"
  | "competitions"
  | "camps"

export interface GalleryItem {
  id: string
  category: Exclude<GalleryCategory, "all">
  alt: string
  src: string | null
  caption: string
  objectPosition?: string
}

export const galleryCategories: { value: GalleryCategory; label: string }[] = [
  { value: "all", label: "Все" },
  { value: "hall", label: "Зал" },
  { value: "group", label: "Групповые тренировки" },
  { value: "personal", label: "Персональные тренировки" },
  { value: "split", label: "Сплит-тренировки" },
  { value: "competitions", label: "Соревнования" },
  { value: "camps", label: "Сборы" },
]

export const galleryItems: GalleryItem[] = [
  { id: "g1", category: "hall", alt: "Ринг клуба Медведь", src: "/images/gallery/hall-5898.jpg", caption: "Ринг" },
  { id: "g2", category: "hall", alt: "Зал с мешками и рингом", src: "/images/gallery/hall-5897.jpg", caption: "Зал — мешки и ринг" },
  { id: "g3", category: "hall", alt: "Боксёрские мешки", src: "/images/gallery/hall-5895.jpg", caption: "Боксёрские мешки" },
  { id: "g4", category: "hall", alt: "Боксёрский зал с рингом", src: "/images/gallery/hall-5894.jpg", caption: "Боксёрский зал" },
  { id: "g5", category: "hall", alt: "Зал с зеркалами", src: "/images/gallery/hall-5896.jpg", caption: "Зал — зеркала и постеры" },
  { id: "g6", category: "hall", alt: "Силовой зал", src: "/images/gallery/hall-5888.jpg", caption: "Силовой зал" },
  { id: "g7", category: "group", alt: "Групповая тренировка в клубе Медведь", src: "/images/gallery/group-0330.jpg", caption: "Групповая тренировка" },
  { id: "g18", category: "group", alt: "Групповая тренировка — работа в парах", src: "/images/gallery/group-2912.jpg", caption: "Групповая тренировка" },
  { id: "g8", category: "personal", alt: "Персональная тренировка на улице", src: "/images/gallery/personal-8434.jpg", caption: "Персональная тренировка" },
  { id: "g19", category: "personal", alt: "Персональная тренировка — работа с тренером", src: "/images/gallery/personal-c91f.jpg", caption: "Персональная тренировка" },
  { id: "g9", category: "split", alt: "Сплит-тренировка", src: null, caption: "Сплит-тренировка" },
  { id: "g10", category: "competitions", alt: "Соревнования — боксёр на ринге", src: "/images/gallery/competitions-0662.jpg", caption: "Соревнования", objectPosition: "top" },
  { id: "g20", category: "competitions", alt: "Соревнования — победа", src: "/images/gallery/competitions-ac4d.jpg", caption: "Соревнования" },
  { id: "g11", category: "camps", alt: "Сборы — тренировка", src: "/images/gallery/camps-2983.jpg", caption: "Сборы на Азовском море" },
  { id: "g21", category: "camps", alt: "Сборы — тренировка в зале", src: "/images/gallery/camps-e60f.jpg", caption: "Сборы" },
  { id: "g22", category: "camps", alt: "Сборы — работа с тренером", src: "/images/gallery/camps-1d2c.jpg", caption: "Сборы" },
  { id: "g23", category: "camps", alt: "Сборы — спарринг", src: "/images/gallery/camps-7331.jpg", caption: "Сборы" },
  { id: "g24", category: "camps", alt: "Сборы — тренировка в паре", src: "/images/gallery/camps-1530.jpg", caption: "Сборы" },
  { id: "g25", category: "camps", alt: "Сборы — групповая тренировка", src: "/images/gallery/camps-2756.jpg", caption: "Сборы" },
  { id: "g12", category: "camps", alt: "Команда клуба Медведь на сборах в Таиланде", src: "/images/camps/thailand-team.jpg", caption: "Сборы в Таиланде — вся команда" },
  { id: "g13", category: "camps", alt: "Тренировочный зал в Таиланде — тайский ринг", src: "/images/camps/thailand-gym-ring.jpg", caption: "Тайский ринг в Таиланде" },
  { id: "g14", category: "camps", alt: "Тренировка в Таиланде — спарринг", src: "/images/camps/thailand-sparring.jpg", caption: "Спарринг в тайском зале" },
  { id: "g15", category: "camps", alt: "Тренировка с тайским тренером", src: "/images/camps/thailand-training-1.jpg", caption: "Тренировка с тайским тренером" },
  { id: "g16", category: "camps", alt: "Клуб Медведь с флагом в тайском зале", src: "/images/camps/thailand-flag.jpg", caption: "Клуб «Медведь» в Таиланде" },
  { id: "g17", category: "camps", alt: "Тренировка в тайском зале Таиланд", src: "/images/camps/thailand-training-2.jpg", caption: "Тренировка в Таиланде" },
]
