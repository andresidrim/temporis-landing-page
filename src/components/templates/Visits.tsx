import Container from "../Container";
import Image from "next/image";
import bg from "public/images/visit-bg.jpg";
import { TemporisButton } from "../atoms";
import { Links } from "@/enums/links";

export default function Visits() {
  return (
    <section className="relative w-full h-full items-center justify-center flex border-t-temporis-yellow border-t-8">
      <Image
        src={bg}
        alt="Imagem de fundo que mostra o estande do projeto Temporis na feira do Amazon Hacking"
        className="absolute inset-0 object-cover w-full h-full"
        quality={100}
        height={3000}
        width={3000}
      />
      <div className="absolute w-full h-full inset-0 bg-black/70 z-10" />
      <Container className="relative font-inter text-7xl z-20 animate-fade-in gap-12">
        <h2 className="font-inter font-bold text-4xl md:text-5xl text-temporis-white text-center">
          Veja quem visitou o Temporis no Amazon Hacking
        </h2>
        <p className="text-2xl text-balance text-temporis-white text-center mb-4">
          Durante a feira Amazon Hacking, muitas pessoas experimentaram o
          Temporis e embarcaram nessa jornada histórica. Veja quem já fez parte
          dessa aventura!
        </p>
        <TemporisButton
          asLink
          href={Links.Visits}
          target="_blank"
          bgClassName="max-w-[310px]"
          overlayClassName="max-w-[310px]"
        >
          Ver visitantes
        </TemporisButton>
      </Container>
    </section>
  );
}
