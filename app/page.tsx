import dynamic from "next/dynamic"
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
import Footer from "@/app/components/Footer"
import FloatingButton from "@/app/components/FloatingButton"

const GallerySection = dynamic(() => import("@/app/components/GallerySection"))
const ReviewsSection = dynamic(() => import("@/app/components/ReviewsSection"))
const PopupForm = dynamic(() => import("@/app/components/PopupForm"))

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <TrainingTypesSection />
        <AudienceSection />
        <ScheduleSection />
        <TrainersSection />
        <GallerySection />
        <CampsSection />
        <AchievementsSection />
        <ReviewsSection />
        <LeadFormSection />
        <FaqSection />
        <ContactsSection />
      </main>
      <Footer />
      <FloatingButton />
      <PopupForm />
    </>
  )
}
