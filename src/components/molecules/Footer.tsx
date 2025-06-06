import { Sections } from "@/enums/sections";
import Container from "../Container";
import Image from "next/image";
import temporisLogo from "public/images/temporis-logo.png";
import { Link } from "../atoms";
import { Links } from "@/enums/links";
import { PiInstagramLogo } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="bg-temporis-black font-inter text-temporis-white w-full h-fit border-t-temporis-yellow border-t-8 flex flex-col items-center justify-center pb-8">
      <a
        href={`#${Sections.Hero}`}
        className="w-full h-fit cursor-pointer flex items-center justify-center mt-12"
      >
        <Image
          src={temporisLogo}
          alt="Logo do jogo Temporis"
          className="object-contain object-center w-full h-full max-h-64"
        />
      </a>
      <Container className="md:flex-row gap-20 items-center pt-0 md:pt-0 w-full md:items-start">
        <div className="flex flex-col items-center justify-center w-fit h-fit gap-8">
          <h2 className="text-3xl font-semibold">Mapa</h2>
          <div className="flex flex-col items-center justify-center w-fit h-fit gap-6">
            <Link
              href={`#${Sections.AboutGame}`}
              className="text-temporis-white text-xl"
            >
              Sobre o jogo
            </Link>
            <Link
              href={`#${Sections.HowToPlay}`}
              className="text-temporis-white text-xl"
            >
              Como se joga?
            </Link>
            <Link
              href={`#${Sections.OurPurpose}`}
              className="text-temporis-white text-xl"
            >
              Nosso propósito
            </Link>
            <Link
              href={`#${Sections.Vote}`}
              className="text-temporis-white text-xl"
            >
              Vote no Temporis
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-fit h-fit gap-8 mt-4 md:mt-0">
          <h2 className="text-3xl font-semibold">Redes Sociais</h2>
          <Link
            href={Links.Instagram}
            className="text-temporis-white flex flex-row items-center justify-center w-fit h-fit gap-1 text-xl"
          >
            <PiInstagramLogo size={32} />
            @temporis_belem
          </Link>
        </div>
      </Container>
      <p className="text-center px-4 mt-8">
        © 2025 Temporis • Todos os direitos reservados
      </p>
    </footer>
  );
}
