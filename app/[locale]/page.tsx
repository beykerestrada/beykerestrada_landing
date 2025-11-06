// app/[locale]/page.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Value from "@/components/Value";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const UPWORK = "https://www.upwork.com/freelancers/~01577deb572030ada8";
const CALENDLY = ""; // set your calendly link when available
const CONSULTATION = "https://www.upwork.com/services/consultation/development-it-beyker-1803170150932070386";

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Header upworkUrl={UPWORK} />
      <Hero upworkUrl={UPWORK} calendlyUrl={CALENDLY || undefined} />
      <Value />
      <Services upworkUrl={UPWORK} consultationUrl={CONSULTATION} />
      <Process />
      <FinalCTA upworkUrl={UPWORK} calendlyUrl={CALENDLY || undefined} />
      <Footer upworkUrl={UPWORK} />
    </main>
  );
}
