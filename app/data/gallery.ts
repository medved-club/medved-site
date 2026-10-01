export type GalleryCategory =
  | "all"
  | "hall"
  | "group"
  | "personal"
  | "split"
  | "competitions"
  | "krasnodar"
  | "thailand"

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
  { value: "krasnodar", label: "Сборы Краснодарский край" },
  { value: "thailand", label: "Сборы Таиланд" },
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
  { id: "g32", category: "group", alt: "Соревнования — команда", src: "/images/gallery/group-0328.jpg", caption: "Групповая тренировка" },
  { id: "g33", category: "group", alt: "Групповое фото", src: "/images/gallery/group-0507.jpg", caption: "Групповая тренировка" },
  { id: "g34", category: "group", alt: "Команда у ринга", src: "/images/gallery/group-2462.jpg", caption: "Групповая тренировка" },
  { id: "g35", category: "group", alt: "Взрослая группа у ринга", src: "/images/gallery/group-2910.jpg", caption: "Групповая тренировка" },
  { id: "g36", category: "group", alt: "Команда у ринга", src: "/images/gallery/group-3198.jpg", caption: "Групповая тренировка" },
  { id: "g37", category: "group", alt: "Большая команда у ринга", src: "/images/gallery/group-3516.jpg", caption: "Групповая тренировка" },
  { id: "g46", category: "group", alt: "Дети на ринге перед боем", src: "/images/gallery/group-6470.jpg", caption: "Групповая тренировка" },
  { id: "g8", category: "personal", alt: "Персональная тренировка на улице", src: "/images/gallery/personal-8434.jpg", caption: "Персональная тренировка" },
  { id: "g19", category: "personal", alt: "Персональная тренировка — работа с тренером", src: "/images/gallery/personal-c91f.jpg", caption: "Персональная тренировка" },
  { id: "g26", category: "personal", alt: "Персональная тренировка — удар ногой в лапу", src: "/images/gallery/personal-2983.jpg", caption: "Персональная тренировка" },
  { id: "g9", category: "split", alt: "Сплит-тренировка", src: "/images/gallery/split-6070.jpg", caption: "Сплит-тренировка" },
  { id: "g45", category: "split", alt: "Сплит-тренировка — с тренером", src: "/images/gallery/split-7816.jpg", caption: "Сплит-тренировка" },
  { id: "g47", category: "split", alt: "Сплит-тренировка — работа на лапах", src: "/images/gallery/split-8379.jpg", caption: "Сплит-тренировка" },
  { id: "g49", category: "competitions", alt: "Соревнования — тренер со спортсменами", src: "/images/gallery/competitions-6988b.jpg", caption: "Соревнования" },
  { id: "g10", category: "competitions", alt: "Соревнования — боксёр на ринге", src: "/images/gallery/competitions-0662.jpg", caption: "Соревнования", objectPosition: "top" },
  { id: "g20", category: "competitions", alt: "Соревнования — победа", src: "/images/gallery/competitions-ac4d.jpg", caption: "Соревнования" },
  { id: "g38", category: "competitions", alt: "Соревнования — с медалями", src: "/images/gallery/competitions-45c3.jpg", caption: "Соревнования" },
  { id: "g40", category: "competitions", alt: "Соревнования — юные спортсмены с тренером", src: "/images/gallery/competitions-4004.jpg", caption: "Соревнования" },
  { id: "g48", category: "competitions", alt: "Соревнования на открытом воздухе", src: "/images/gallery/competitions-6508.jpg", caption: "Соревнования" },
  { id: "g31", category: "krasnodar", alt: "Сборы", src: "/images/gallery/camps-7342.jpg", caption: "Сборы" },
  { id: "g21", category: "krasnodar", alt: "Сборы — тренировка в зале", src: "/images/gallery/camps-e60f.jpg", caption: "Сборы" },
  { id: "g22", category: "krasnodar", alt: "Сборы — работа с тренером", src: "/images/gallery/camps-1d2c.jpg", caption: "Сборы" },
  { id: "g23", category: "krasnodar", alt: "Сборы — спарринг", src: "/images/gallery/camps-7331.jpg", caption: "Сборы" },
  { id: "g24", category: "krasnodar", alt: "Сборы — тренировка в паре", src: "/images/gallery/camps-1530.jpg", caption: "Сборы" },
  { id: "g25", category: "krasnodar", alt: "Сборы — групповая тренировка", src: "/images/gallery/camps-2756.jpg", caption: "Сборы" },
  { id: "g27", category: "krasnodar", alt: "Сборы", src: "/images/gallery/camps-4916.jpg", caption: "Сборы" },
  { id: "g28", category: "krasnodar", alt: "Сборы", src: "/images/gallery/camps-0593.jpg", caption: "Сборы" },
  { id: "g29", category: "krasnodar", alt: "Сборы", src: "/images/gallery/camps-0704.jpg", caption: "Сборы" },
  { id: "g30", category: "krasnodar", alt: "Сборы", src: "/images/gallery/camps-6489.jpg", caption: "Сборы" },
  { id: "g41", category: "krasnodar", alt: "Сборы", src: "/images/gallery/camps-1560.jpg", caption: "Сборы" },
  { id: "g42", category: "krasnodar", alt: "Сборы — тренировка", src: "/images/gallery/camps-63da.jpg", caption: "Сборы" },
  { id: "g43", category: "krasnodar", alt: "Сборы — с дипломами", src: "/images/gallery/camps-6735.jpg", caption: "Сборы" },
  { id: "g44", category: "krasnodar", alt: "Сборы — на пляже", src: "/images/gallery/camps-7b38.jpg", caption: "Сборы" },
  { id: "g50", category: "krasnodar", alt: "Сборы — с флагом клуба на пляже", src: "/images/gallery/camps-7378.jpg", caption: "Сборы" },
  { id: "g51", category: "krasnodar", alt: "Сборы — портрет", src: "/images/gallery/camps-8048.jpg", caption: "Сборы" },
  { id: "g52", category: "krasnodar", alt: "Сборы — команда на пляже", src: "/images/gallery/camps-8326.jpg", caption: "Сборы" },
  { id: "g53", category: "krasnodar", alt: "Сборы — удар ногой", src: "/images/gallery/camps-a630.jpg", caption: "Сборы" },
  { id: "g54", category: "krasnodar", alt: "Сборы — большая команда", src: "/images/gallery/camps-b545.jpg", caption: "Сборы" },
  { id: "g12", category: "thailand", alt: "Команда клуба Медведь на сборах в Таиланде", src: "/images/camps/thailand-team.jpg", caption: "Сборы в Таиланде — вся команда" },
  { id: "g13", category: "thailand", alt: "Тренировочный зал в Таиланде — тайский ринг", src: "/images/camps/thailand-gym-ring.jpg", caption: "Тайский ринг в Таиланде" },
  { id: "g14", category: "thailand", alt: "Тренировка в Таиланде — спарринг", src: "/images/camps/thailand-sparring.jpg", caption: "Спарринг в тайском зале" },
  { id: "g15", category: "thailand", alt: "Тренировка с тайским тренером", src: "/images/camps/thailand-training-1.jpg", caption: "Тренировка с тайским тренером" },
  { id: "g16", category: "thailand", alt: "Клуб Медведь с флагом в тайском зале", src: "/images/camps/thailand-flag.jpg", caption: "Клуб «Медведь» в Таиланде" },
]
