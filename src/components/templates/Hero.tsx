import Container from "../Container";
import Image from "next/image";
import heroBg from "public/images/hero-bg.png";
import logo from "public/images/temporis-logo.png";
import { Sections } from "@/enums/sections";
import { TemporisButton } from "../atoms";

export default function Hero() {
  return (
    <section
      id={Sections.Hero}
      className="fixed top-0 w-full h-full flex flex-col items-center justify-center min-h-screen max-h-screen overflow-hidden "
    >
      <Image
        src={heroBg}
        alt="Imagem do fundo da seção Hero"
        quality={100}
        width={3000}
        height={3000}
        priority
        className="absolute w-full h-full inset-0 object-cover object-center pixelated-image"
      />
      <div className="absolute w-full h-full inset-0 bg-black/50 z-10" />
      <Container className="relative font-inter text-7xl z-20 animate-fade-in">
        <Image
          src={logo}
          alt="Logo do jogo Temporis"
          quality={100}
          width={3000}
          height={3000}
          className="w-full h-fit max-w-[800px] pixelated-image min-w-[420px] mb-10 md:mb-0"
        />
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-vt323 tracking-wider text-center text-temporis-white">
          Viva a história através do virtual e reconhaça-a no mundo real
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center w-fit h-fit gap-8 mt-10">
          <TemporisButton asLink href={`#${Sections.AboutGame}`}>
            {"Explore\nmais"}
          </TemporisButton>
          <TemporisButton asLink href={`#${Sections.Vote}`}>
            Vote no projeto
          </TemporisButton>
        </div>
      </Container>
    </section>
  );
}
