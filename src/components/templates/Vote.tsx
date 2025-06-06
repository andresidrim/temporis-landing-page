import Container from "../Container";
import Image from "next/image";
import voteBg from "public/images/vote-bg.png";
import { Sections } from "@/enums/sections";
import { TemporisButton } from "../atoms";
import { Links } from "@/enums/links";

export default function Vote() {
  return (
    <section
      id={Sections.Vote}
      className="relative w-full flex flex-col items-center justify-center h-screen min-h-screen max-h-screen overflow-hidden"
    >
      <Image
        src={voteBg}
        alt="Imagem do fundo da seção Vote no Temporis"
        quality={100}
        width={3000}
        height={3000}
        priority
        className="absolute w-full h-full inset-0 object-cover object-center pixelated-image"
      />
      <div className="absolute w-full h-full inset-0 bg-black/70 z-10" />
      <Container className="relative font-inter text-7xl z-20 animate-fade-in gap-12">
        <h2 className="font-inter font-bold text-4xl md:text-5xl text-temporis-white text-center">
          Vote no Temporis
        </h2>
        <p className="text-2xl whitespace-pre-line text-balance text-temporis-white text-center mb-4">
          {
            "A história merece ser vivida. O Temporis transforma cultura em jogo e aprendizado em aventura.\nEstamos na feira do Amazon Hacking (CESUPA) — se acredita no poder da educação e tecnologia, vote no Temporis!"
          }
        </p>
        <TemporisButton
          asLink
          href={Links.Vote}
          bgClassName="max-w-[300px]"
          overlayClassName="max-w-[300px]"
        >
          {"Apoie o\nprojeto"}
        </TemporisButton>
      </Container>
    </section>
  );
}
