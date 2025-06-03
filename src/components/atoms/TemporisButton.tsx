import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import button from "public/images/button.png";
import buttonOverlay from "public/images/button-overlay.png";
import { cn } from "@/utils/className";

type LinkProps = {
  asLink: true;
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

type ButtonProps = {
  asLink?: false;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type SharedProps = {
  children: ReactNode;
  className?: string;
  bgClassName?: string;
  overlayClassName?: string;
  containerClassName?: string;
};

type TemporisButtonProps = SharedProps & (LinkProps | ButtonProps);

export default function TemporisButton(props: TemporisButtonProps) {
  const {
    asLink = false,
    children,
    className,
    bgClassName,
    containerClassName,
    overlayClassName,
    ...rest
  } = props;

  const content = (
    <>
      <Image
        src={buttonOverlay}
        alt="Overlay para indicar hover do botão"
        className={cn(
          "absolute object-contain inset-0 z-10 opacity-0 group-hover:opacity-40 transition-all duration-150 ease-in-out pixelated-image",
          overlayClassName,
        )}
      />
      <Image
        src={button}
        alt="Imagem de fundo do botão"
        className={cn(
          "object-contain w-full h-fit max-w-[250px] pixelated-image",
          bgClassName,
        )}
      />
      <span
        className={cn(
          "absolute top-1/2 left-0 right-0 -translate-y-1/2 font-press-start text-temporis-black leading-[0.8] text-[40px] text-center mx-auto text-xl whitespace-pre-line tracking-tighter",
          className,
        )}
      >
        {children}
      </span>
    </>
  );

  if (asLink) {
    const { href, ...linkProps } = rest as LinkProps;
    return (
      <Link
        href={href}
        className={cn("relative cursor-pointer group", containerClassName)}
        {...linkProps}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn("relative cursor-pointer group", containerClassName)}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
