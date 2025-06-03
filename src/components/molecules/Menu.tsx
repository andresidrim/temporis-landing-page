"use client";

import {
  Sheet,
  SheetTitle,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import temporisLogo from "public/images/temporis-logo.png";
import Image from "next/image";
import { Link } from "../atoms";
import { Sections } from "@/enums/sections";
import { useState, useEffect } from "react";
import { useLenis } from "lenis/react";

export default function Menu() {
  const [open, setOpen] = useState<boolean>(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
  }, [open, lenis]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="lg:hidden ml-auto text-temporis-black cursor-pointer">
        <GiHamburgerMenu size={32} />
      </SheetTrigger>
      <SheetContent className="bg-temporis-black ring-0 outline-0 border-0 border-l-8 border-l-temporis-yellow">
        <SheetHeader className="flex-row w-full items-start justify-between relative">
          <SheetTitle className="sr-only">Temporis</SheetTitle>
          <Image
            src={temporisLogo}
            alt="Logo do jogo Temporis"
            className="mt-8"
          />
          <SheetClose className="absolute top-8 right-8 cursor-pointer">
            <IoMdClose size={32} className="text-temporis-white" />
          </SheetClose>
        </SheetHeader>
        <div className="items-start justify-center w-full h-full max-h-[500px] gap-6 flex flex-col *:text-temporis-white pl-10 *:text-2xl">
          <Link href={`#${Sections.AboutGame}`} onClick={() => setOpen(false)}>
            Sobre o jogo
          </Link>
          <Link href={`#${Sections.HowToPlay}`} onClick={() => setOpen(false)}>
            Como se joga?
          </Link>
          <Link href={`#${Sections.OurPurpose}`} onClick={() => setOpen(false)}>
            Nosso propósito
          </Link>
          <Link href={`#${Sections.Vote}`} onClick={() => setOpen(false)}>
            Vote no Temporis
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
