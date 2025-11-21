// app/[locale]/page.tsx
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Value from "@/components/Value"
import Services from "@/components/Services"
import Process from "@/components/Process"
import Footer from "@/components/Footer"
import WhoIWorkWith from "@/components/WhoIWorkWith"
import CaseSnapshot from "@/components/CaseSnapshot"
import Contact from "@/components/Contact"
import LeadMagnet from "@/components/LeadMagnet"

// Ajusta estos valores a tus URLs reales o variables de entorno
const UPWORK = "https://www.upwork.com/freelancers/~01577deb572030ada8"
const CALENDLY = process.env.NEXT_PUBLIC_CALENDLY_URL ?? ""
const CONSULTATION = CALENDLY || UPWORK

export default function LocaleLandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* 1. Hero: propuesta central + CTA */}
      <Hero upworkUrl={UPWORK} calendlyUrl={CALENDLY || undefined} />

      {/* 2. Qué cambia en la operación (value prop) */}
      <Value />

      {/* 3. Proceso y metodología */}
      <Process />

      {/* 4. Lead magnet - soft conversion */}
      <LeadMagnet />

      {/* 5. Formas de trabajar juntos */}
      <Services upworkUrl={UPWORK} consultationUrl={CONSULTATION} />

      {/* 6. Caso concreto + para quién es */}
      <CaseSnapshot />
      <WhoIWorkWith />

      {/* 7. Contacto final */}
      <Contact upworkUrl={UPWORK} calendlyUrl={CALENDLY || undefined} />

      <Footer upworkUrl={UPWORK} />
    </main>
  )
}
