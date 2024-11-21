"use client";

import { InputPesquisa } from "@/components/InputPesquisa";
import { ItemGame } from "@/components/ItemGame";
import { useClienteStore } from "@/context/cliente";
import { GameI } from "@/utils/types/games";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [games, setGames] = useState<GameI[]>([]);
  const { logaCliente } = useClienteStore();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function loga(userId: string) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/clientes/${userId}`);
      if (response.status === 200) {
        const dados = await response.json();
        logaCliente(dados);
      }
    }

    if (localStorage.getItem('client_key')) {
      const userId = localStorage.getItem('client_key') as string;
      loga(userId);
    }

    async function getDados() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/games`);
      const dados = await response.json();
      setGames(dados);
    }
    getDados();
  }, []);

  const listGames = games.map((game) => {
    if (!game.id) {
      console.warn("Missing game id", game);
    }
    return <ItemGame data={game} key={game.id} />;
  });

  // Função para mover o carrossel
  const scrollTo = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const totalGames = games.length;
      const gamesPerPage = 3;  // Número de jogos visíveis por vez
      const maxIndex = Math.ceil(totalGames / gamesPerPage) - 1;  // Máximo de páginas

      setCurrentIndex((prevIndex) => {
        if (direction === "right") {
          return Math.min(prevIndex + 1, maxIndex);
        } else {
          return Math.max(prevIndex - 1, 0);
        }
      });
    }
  };

  // Dividir os jogos em páginas
  const currentGames = games.slice(currentIndex * 3, (currentIndex + 1) * 3);

  return (
    <div className="bg-black min-h-screen py-6 px-6 sm:px-8 lg:px-12">
      <div className="max-w-screen-xl mx-auto">
        {/* Barra de Pesquisa */}
        <div className="mb-6">
          <InputPesquisa setGames={setGames} />
        </div>

        {/* Título e descrição */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-white tracking-tight">
            BlockBuster Matrix <span className="text-red-600">The world's #1</span> rental house game.
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            Welcome to Blockbuster Matrix, where you can rent games online! Search for your favorite games below.
          </p>
        </div>

        {/* Carrossel de Jogos */}
        <section className="space-y-8">
          <div className="relative">
            {/* Botões de navegação */}
            <button
              onClick={() => scrollTo("left")}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full z-10"
              style={{ zIndex: 10 }}
            >
              &lt;
            </button>
            <button
              onClick={() => scrollTo("right")}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full z-10"
              style={{ zIndex: 10 }}
            >
              &gt;
            </button>

            {/* Lista de Jogos */}
            <div
              ref={carouselRef}
              className="space-x-6 overflow-x-auto flex py-4 hide-scrollbar"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {currentGames.map((game) => (
                <div
                  className="flex-shrink-0 w-[300px]"  // Largura do jogo
                  key={game.id}
                >
                  <ItemGame data={game} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
