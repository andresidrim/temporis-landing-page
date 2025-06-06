import {
  Cinzel_Decorative,
  Inter,
  Lora,
  Press_Start_2P,
  VT323,
} from "next/font/google";

export const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  weight: ["400", "700", "900"],
  display: "swap",
  subsets: ["latin"],
});

export const lora = Lora({
  variable: "--font-lora",
  display: "swap",
  subsets: ["latin"],
});

export const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

export const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

export const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});
