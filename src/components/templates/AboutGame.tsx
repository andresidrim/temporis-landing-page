import { Sections } from "@/enums/sections";
import Container from "../Container";
import Image from "next/image";
import menuMockup from "public/images/menu-mockup.png";
import dialogMockup from "public/images/mockup-dialog.png";

export default function AboutGame() {
  return (
    <section id={Sections.AboutGame} className="w-full h-fit pt-[108px]">
      <Container className="lg:flex-row gap-20 items-start">
        <div className="flex flex-col items-start justify-center w-full gap-12">
          <h2 className="font-lora font-bold text-4xl md:text-5xl">
            Sobre o jogo
          </h2>
          <p className="text-lg whitespace-pre-line text-balance">
            {
              "Temporis é um jogo mobile que conecta jovens à história de Belém de forma viva e interativa.\nAo invés de apenas ler sobre o passado, o jogador o vivencia — explorando museus, conversando com personagens históricos e resolvendo enigmas no próprio local onde a história aconteceu.\n\nCom a ajuda da geolocalização, cada fase do jogo acontece em pontos reais da cidade, como museus e monumentos. Temporis transforma a cidade em um grande tabuleiro educativo, divertido e inesquecível."
            }
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-12 md:gap-5">
          <Image
            src={menuMockup}
            alt="Mockup do menu do jogo Temporis em uma tela de celular"
            className="object-contain w-fit h-full max-h-[500px]"
          />
          <Image
            src={dialogMockup}
            alt="Mockup de uma interação de diálogo do jogo Temporis em uma tela de celular"
            className="object-contain w-fit h-full max-h-[500px]"
          />
        </div>
      </Container>
    </section>
  );
}
