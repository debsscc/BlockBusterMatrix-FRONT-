"use client";

import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

interface gamesConsoleI {
  console: string;
  number: number;
}

interface generalDataI {
  clientes: number;
  games: number;
  total: number;
}

type DataRow = [string, number, string];

export default function Principal() {
  const [gamesConsole, setGamesConsole] = useState<gamesConsoleI[]>([]);
  const [dados, setDados] = useState<generalDataI>({} as generalDataI);

  useEffect(() => {
    // Função para buscar os dados gerais
    async function getGeneralData() {
      try {
        const response = await fetch("http://localhost:3000/dashboard/general");
        const data = await response.json();
        setDados(data);
      } catch (error) {
        console.error("Erro ao buscar os dados gerais:", error);
      }
    }

    // Função para buscar os dados dos consoles
    async function getDataGraphic() {
      try {
        const response = await fetch("http://localhost:3000/dashboard/consoles");
        const data = await response.json();
        setGamesConsole(data);
      } catch (error) {
        console.error("Erro ao buscar os dados gráficos:", error);
      }
    }

    getGeneralData();
    getDataGraphic();
  }, []); // Executa apenas uma vez na montagem do componente

  // Dados do gráfico
  const data: (["Console", "Amount", { role: "style" }] | DataRow)[] = [
    ["Console", "Amount", { role: "style" }],    
  ];

  // Opções do gráfico
  const options = {
    chart: {
      title: "Games by Console",
      subtitle: "Number of games by console",
    },
    bars: "horizontal", // Requerido para gráficos de barra do Google Charts
    axes: {
      x: {
        0: { side: "top", label: "Amount" }, // Eixo superior
      },
    },
    height: 400,
  };

  return (
    <div className="container">
      <h2 className="text-3xl mb-4 font-bold">Visão Geral do Sistema</h2>
      <div className="w-2/3 flex justify-between mx-auto mb-5">
        {/* Clientes */}
        <div className="border-blue-600 border rounded p-6">
          <span className="bg-blue-100 text-blue-800 text-xl text-center font-bold block">
            {dados.clientes}
          </span>
          <p className="font-bold mt-2 text-center">N° Clients</p>
        </div>
        {/* Consoles */}
        <div className="border-red-600 border rounded p-6">
          <span className="bg-red-100 text-red-800 text-xl text-center font-bold block">
            {gamesConsole.length}
          </span>
          <p className="font-bold mt-2 text-center">N° Consoles</p>
        </div>
        {/* Games */}
        <div className="border-green-600 border rounded p-6">
          <span className="bg-green-100 text-green-800 text-xl text-center font-bold block">
            {dados.games}
          </span>
          <p className="font-bold mt-2 text-center">N° Games</p>
        </div>
      </div>
      {/* Gráfico */}
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
      <h2 className="text-2xl font-bold mt-4">Games by Console</h2>
      <Chart
        chartType="ColumnChart"
        width="95%"
        height="380px"
        data={[
            ["Console", "Amount"],
            ...gamesConsole.map((game) => [game.console, game.number]),
        ]}
      />

    </div>
  );
}
