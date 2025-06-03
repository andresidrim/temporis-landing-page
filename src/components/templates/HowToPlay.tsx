import { Sections } from "@/enums/sections";
import Container from "../Container";
import Image from "next/image";
import functionalities from "public/images/functionalities.png";

export default function HowToPlay() {
  return (
    <section id={Sections.HowToPlay} className="w-full h-fit pt-[108px]">
      <Container className="lg:flex-row-reverse gap-20">
        <div className="flex flex-col items-start justify-center w-full gap-12">
          <h2 className="font-lora font-bold text-4xl md:text-5xl">
            Como se joga?
          </h2>
          <p className="text-lg whitespace-pre-line text-balance">
            {
              "No Temporis, o mundo real e o digital se encontram. A movimentação do personagem acontece por toque na tela, mas o jogo só pode ser jogado dentro dos espaços históricos reais da cidade — sua localização física desbloqueia as fases.\nCada fase é ambientada em um museu ou monumento real de Belém. Ao entrar no local, você será recebido por personagens históricos virtuais, que compartilham histórias, fazem perguntas e propõem enigmas ligados ao ambiente.\n\nPara avançar nos desafios, use a câmera do celular em missões fotográficas, como registrar fachadas ou encontrar objetos das exposições. Também será necessário responder quizzes temáticos sobre história, arte e geografia do local.\nAo progredir, você desbloqueia cards digitais colecionáveis, repletos de curiosidades culturais. Uma jornada interativa onde o aprendizado acontece com o corpo presente e a mente explorando o passado."
            }
          </p>
        </div>
        <div className="flex items-center justify-center w-full">
          <Image
            src={functionalities}
            alt="Colagem com câmera e bússola em pixel art, mostrando fotos comparativas de uma escadaria real e sua versão digital no jogo."
            className="object-contain w-fit h-full max-h-[500px]"
          />
        </div>
      </Container>
    </section>
  );
}
