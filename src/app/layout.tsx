import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Headers";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blockbuster Matrix",
  description: "Blockbuster Matrix - Rent video games and be a happy geek!",
  keywords: ['Locadora', 'Jogos', 'Videogame', 'Geek', 'Aluguel', 'Diversão', 'Locadora de Jogos', 'Blockbuster', 'Matrix'],
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
