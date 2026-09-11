import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { contacts } from "@/app/data/contacts"
import { faq } from "@/app/data/faq"
import { reviews } from "@/app/data/reviews"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Клуб тайского бокса «Медведь» в Щёлково — тренировки для детей и взрослых",
  description:
    "Тренировки по тайскому боксу в Щёлково для детей, подростков и взрослых. Групповые, персональные и сплит-тренировки. Расписание, сборы, отзывы и запись онлайн.",
  keywords: [
    "тайский бокс Щёлково",
    "муай тай Щёлково",
    "клуб тайского бокса Медведь",
    "тайский бокс для детей Щёлково",
    "секция тайского бокса Щёлково",
    "персональные тренировки по тайскому боксу",
    "сплит-тренировки по тайскому боксу",
    "спортивная секция для детей Щёлково",
  ],
  openGraph: {
    title: "Клуб тайского бокса «Медведь» в Щёлково",
    description: "Тренировки по тайскому боксу для детей, подростков и взрослых в Щёлково.",
    type: "website",
    locale: "ru_RU",
    url: "https://medved-club.ru",
    siteName: "Клуб тайского бокса «Медведь»",
    images: [
      {
        url: "https://medved-club.ru/images/trainer-nikita.jpg",
        width: 900,
        height: 1200,
        alt: "Клуб тайского бокса Медведь — Щёлково",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Клуб тайского бокса «Медведь» в Щёлково",
    description: "Тренировки по тайскому боксу для детей, подростков и взрослых в Щёлково.",
    images: ["https://medved-club.ru/images/trainer-nikita.jpg"],
  },
  alternates: {
    canonical: "https://medved-club.ru",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": ["SportsClub", "LocalBusiness"],
  name: contacts.clubName,
  description:
    "Клуб тайского бокса в Щёлково. Групповые, персональные и сплит-тренировки для детей, подростков и взрослых.",
  url: "https://medved-club.ru",
  logo: "https://medved-club.ru/images/trainer-nikita.jpg",
  image: "https://medved-club.ru/images/trainer-nikita.jpg",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: String(reviews.length),
    bestRating: "5",
    worstRating: "1",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: contacts.city,
    addressRegion: "Московская область",
    streetAddress: "Талсинская улица, 9/2",
    postalCode: "141100",
    addressCountry: "RU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.9267,
    longitude: 38.0072,
  },
  telephone: contacts.phone,
  sameAs: [contacts.vk, contacts.telegram, contacts.yandexMaps],
  sport: "Тайский бокс",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday",    opens: "18:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "18:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday",    opens: "18:00", closes: "21:00" },
  ],
  priceRange: "₽₽",
  employee: {
    "@type": "Person",
    name: "Никита Эрденко",
    jobTitle: "Тренер по тайскому боксу",
    description: "Профессиональный тренер по тайскому боксу. КМС. Более 10 лет опыта. Тренерская лицензия Федерации тайского бокса Московской области.",
    image: "https://medved-club.ru/images/trainer-nikita.jpg",
  },
}

const jsonLdTrainer = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Никита Эрденко",
  jobTitle: "Тренер по тайскому боксу",
  worksFor: { "@type": "SportsClub", name: contacts.clubName },
  description: "Основатель клуба «Медведь». КМС по тайскому боксу. Более 10 лет тренерского опыта. Чемпион Республики Мордовия и Твери.",
  image: "https://medved-club.ru/images/trainer-nikita.jpg",
  knowsAbout: ["Тайский бокс", "Муай-тай", "Единоборства"],
}

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        <meta name="geo.region" content="RU-MOS" />
        <meta name="geo.placename" content="Щёлково, Московская область" />
        <meta name="geo.position" content="55.9267;38.0072" />
        <meta name="ICBM" content="55.9267, 38.0072" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTrainer) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
      <body className="antialiased">
        {children}
        {/* Яндекс.Метрика — загружается после интерактивности, не блокирует страницу */}
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");
ym(109565621,"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true,ecommerce:"dataLayer"});`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://mc.yandex.ru/watch/109565621" style={{position:"absolute",left:"-9999px"}} alt="" />
        </noscript>
      </body>
    </html>
  )
}
