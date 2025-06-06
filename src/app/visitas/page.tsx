import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAmazonHackingVisits } from "@/lib/getVisits";
import heroBg from "public/images/hero-bg.png";
import Image from "next/image";
import Container from "@/components/Container";

const AmazonHackingVisitsPage = async () => {
  const visits = await getAmazonHackingVisits();

  return (
    <section className="relative min-h-screen flex flex-col items-center p-4 w-full overflow-x-hidden">
      <Image
        src={heroBg}
        alt="Imagem do fundo da seção Hero"
        quality={100}
        width={3000}
        height={3000}
        priority
        className="absolute w-full h-full inset-0 object-cover object-center pixelated-image"
      />
      <Container>
        <Table className="bg-temporis-white rounded-lg items-center shadow-md w-[80vw]">
          <TableHeader>
            <TableRow className="text-3xl font-bold mb-4 z-10 text-center text-temporis-green">
              <TableCell colSpan={4}>Visitas no Amazon Hacking</TableCell>
            </TableRow>
            <TableRow className="border-t-20 border-transparent">
              <TableCell className="text-left font-bold pl-6 text-temporis-green">
                Nome
              </TableCell>
              <TableCell className="text-left font-bold pl-6 text-temporis-green">
                Local de Origem
              </TableCell>
              <TableCell className="text-left font-bold pl-6 text-temporis-green">
                Museu
              </TableCell>
              <TableCell className="text-left font-bold pl-6 text-temporis-green">
                Visitado Em
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visits
              .slice()
              .reverse()
              .map((visit) => (
                <TableRow className="" key={visit.id}>
                  <TableCell className="pl-6 text-temporis-green">
                    {visit.name}
                  </TableCell>
                  <TableCell className="pl-6 text-temporis-green">
                    {visit.birthPlace}
                  </TableCell>
                  <TableCell className="pl-6 text-temporis-green">
                    {visit.museum.name}
                  </TableCell>
                  <TableCell className="pl-6 text-temporis-green">
                    {new Date(visit.visitedAt).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                    })}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Container>
    </section>
  );
};

export default AmazonHackingVisitsPage;
