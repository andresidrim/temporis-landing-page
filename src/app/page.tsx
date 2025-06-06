import { AmazonHackingButton } from "@/components/atoms";
import { Footer, Header } from "@/components/molecules";
import {
  Hero,
  AboutGame,
  HowToPlay,
  OurPurpose,
  Vote,
  Visits,
} from "@/components/templates";

export default function Page() {
  return (
    <main className="relative flex flex-col items-center justify-center">
      <Header />
      <Hero />
      <div className="bg-temporis-white w-full min-h-screen z-50 mt-[100vh] text-temporis-black font-inter">
        <AboutGame />
        <HowToPlay />
        <OurPurpose />
        <Vote />
        <Visits />
        <Footer />
      </div>
      <AmazonHackingButton />
    </main>
  );
}
