import { AmazonHackingButton } from "@/components/atoms";
import { Footer } from "@/components/molecules";
import {
  Hero,
  AboutGame,
  HowToPlay,
  OurPurpose,
  Vote,
} from "@/components/templates";

export default function Page() {
  return (
    <main className="relative flex flex-col items-center justify-center">
      <Hero />
      <div className="bg-temporis-white w-full min-h-screen z-50 mt-[100vh] text-temporis-black font-lora">
        <AboutGame />
        <HowToPlay />
        <OurPurpose />
        <Vote />
        <Footer />
      </div>
      <AmazonHackingButton />
    </main>
  );
}
