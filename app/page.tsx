import { Header } from "@/components/move-pet/header"
import { Hero } from "@/components/move-pet/hero"
import { About } from "@/components/move-pet/about"
import { Solutions } from "@/components/move-pet/solutions"
import { HowItWorks } from "@/components/move-pet/how-it-works"
import { Benefits } from "@/components/move-pet/benefits"
import { SocialImpact } from "@/components/move-pet/social-impact"
import { Gallery } from "@/components/move-pet/gallery"
import { Testimonials } from "@/components/move-pet/testimonials"
import { FAQ } from "@/components/move-pet/faq"
import { FinalCTA } from "@/components/move-pet/final-cta"
import { Footer } from "@/components/move-pet/footer"

export default function MovePetLanding() {
  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      <Header />
      <Hero />
      <About />
      <Solutions />
      <HowItWorks />
      <Benefits />
      <SocialImpact />
      <Gallery />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}