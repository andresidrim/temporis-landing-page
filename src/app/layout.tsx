import type { Metadata } from "next";
import { cinzelDecorative, lora, pressStart, vt323 } from "@/config/fonts";
import "./globals.css";
import { Header } from "@/components/molecules";
import { ReactLenis } from "@/utils/lenis";

export const metadata: Metadata = {
  title: "Temporis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzelDecorative.variable} ${lora.variable} ${vt323.variable} ${pressStart.variable} antialiased`}
      >
        <ReactLenis root options={{ duration: 0.5 }}>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
