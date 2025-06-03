"use client";

import Container from "../Container";
import Image from "next/image";

import { Link } from "../atoms";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/utils/className";

import temporisLogo from "public/images/temporis-icon.png";
import { Sections } from "@/enums/sections";
import { Menu } from ".";

export default function Header() {
  const [show, setShow] = useState<boolean>(false);
  const animationRef = useRef<number>(null);
  const lastScrollY = useRef(0);
  const isScrolling = useRef(false);

  const handleScrollFrame = () => {
    const currentScrollY = window.scrollY;
    const shouldShow = currentScrollY >= window.innerHeight / 2;

    setShow((prev) => (prev !== shouldShow ? shouldShow : prev));

    if (currentScrollY !== lastScrollY.current) {
      lastScrollY.current = currentScrollY;
      animationRef.current = requestAnimationFrame(handleScrollFrame);
      return;
    }

    isScrolling.current = false;
    animationRef.current = null;
  };

  const onScroll = () => {
    if (!isScrolling.current) {
      isScrolling.current = true;
      lastScrollY.current = window.scrollY;
      animationRef.current = requestAnimationFrame(handleScrollFrame);
    }
  };

  useEffect(() => {
    const shouldShow = window.scrollY >= window.innerHeight / 2;

    setShow((prev) => (prev !== shouldShow ? shouldShow : prev));

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <section
      className={cn(
        "fixed w-full h-fit bg-temporis-white py-10 z-[99] transition-all duration-500 ease-in-out shadow-temporis-header max-h-[108px] flex items-center",
        show ? "top-0" : "-top-full",
      )}
    >
      <Container className="flex-row mx-auto py-0 md:py-0">
        <a
          href={`#${Sections.Hero}`}
          className="w-fit h-fit left-0 cursor-pointer"
        >
          <Image
            src={temporisLogo}
            alt="Logo do jogo Temporis"
            className="object-contain object-center max-w-20"
          />
        </a>
        <Menu />
        <div className="items-center justify-center w-full gap-8 hidden lg:flex text-nowrap">
          <Link href={`#${Sections.AboutGame}`}>Sobre o jogo</Link>
          <Link href={`#${Sections.HowToPlay}`}>Como se joga?</Link>
          <Link href={`#${Sections.OurPurpose}`}>Nosso propósito</Link>
          <Link href={`#${Sections.Vote}`}>Vote no Temporis</Link>
        </div>
      </Container>
    </section>
  );
}
