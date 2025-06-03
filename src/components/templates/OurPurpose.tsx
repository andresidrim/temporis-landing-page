import { Sections } from "@/enums/sections";
import Container from "../Container";
import Image from "next/image";
import ourPurpose from "public/images/our-purpose.png";

export default function OurPurpose() {
  return (
    <section id={Sections.OurPurpose} className="w-full h-fit pt-[108px]">
      <Container className="lg:flex-row gap-20">
        <div className="flex flex-col items-start justify-center w-full gap-12">
          <h2 className="font-lora font-bold text-4xl md:text-5xl">
            Nosso propósito
          </h2>
          <p className="text-lg whitespace-pre-line text-balance">
            {
              "Muitos jovens nunca visitaram os museus e monumentos da própria cidade.\nO Temporis nasceu para mudar isso — para transformar espaços ignorados em aventuras inesquecíveis. Com ele, valorizamos a cultura local, conectamos gerações e fortalecemos o sentimento de pertencimento.\n\nAprender história fica mais leve, divertido e real.\nE mais do que um jogo, Temporis é um convite para viver o que nos trouxe até aqui."
            }
          </p>
        </div>
        <div className="flex items-center justify-center w-full">
          <Image
            src={ourPurpose}
            alt="Ilustração em pixel art de uma paisagem histórica de Belém, emoldurada como um quadro, evocando pertencimento e memória cultural."
            className="object-contain w-fit h-full max-h-[400px]"
          />
        </div>
      </Container>
    </section>
  );
}
