import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Headers";


export const metadata: Metadata = {
  title: "Blockbuster Matrix",
  description: "Blockbuster Matrix - Rent video games and be a happy geek!",
  keywords: ['Blockbuster', 'Games', 'Videogame', 'Geek', 'Rent', 'Fun', 'Game Blockbuster', 'Rent Games', 'Matrix'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
      <Header />
        {children}
        </body>
    </html>
  );
}
