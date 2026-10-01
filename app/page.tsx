import dynamicImport from "next/dynamic"
import Header from "@/app/components/Header"
import HeroSection from "@/app/components/HeroSection"
import StatsSection from "@/app/components/StatsSection"
import TrainingTypesSection from "@/app/components/TrainingTypesSection"
import AudienceSection from "@/app/components/AudienceSection"
import ScheduleSection from "@/app/components/ScheduleSection"
import TrainersSection from "@/app/components/TrainersSection"
import AboutSection from "@/app/components/AboutSection"
import CampsSection from "@/app/components/CampsSection"
import AchievementsSection from "@/app/components/AchievementsSection"
import LeadFormSection from "@/app/components/LeadFormSection"
import FaqSection from "@/app/components/FaqSection"
import ContactsSection from "@/app/components/ContactsSection"
import InfoBlocksSection from "@/app/components/InfoBlocksSection"
import Footer from "@/app/components/Footer"
import FloatingButton from "@/app/components/FloatingButton"
import { getSiteContent } from "@/lib/site-content"

export const dynamic = "force-dynamic"

const GallerySection = dynamicImport(() => import("@/app/components/GallerySection"))
const ReviewsSection = dynamicImport(() => import("@/app/components/ReviewsSection"))
const PopupForm = dynamicImport(() => import("@/app/components/PopupForm"))

export default async function HomePage() {
  const content = await getSiteContent()

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <InfoBlocksSection infoBlocks={content.infoBlocks} />
        <TrainingTypesSection trainingTypes={content.trainingTypes} />
        <AudienceSection />
        <ScheduleSection />
        <TrainersSection />
        <GallerySection galleryItems={content.galleryItems} />
        <CampsSection camps={content.camps} />
        <AchievementsSection />
        <ReviewsSection reviews={content.reviews} />
        <LeadFormSection />
        <FaqSection faq={content.faq} />
        <ContactsSection />
      </main>
      <Footer />
      <FloatingButton />
      <PopupForm />
    </>
  )
}
