"use client";

import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

interface gamesConsoleI {
  console: string;
  num: number;
}

interface generalDataI {
  clientes: number;
  games: number;
  consoles: number;
}

type DataRow = [string, number, string];

export default function PrincipalAdmin() {
  const [gamesConsole, setGamesConsole] = useState<gamesConsoleI[]>([]);
  const [dados, setDados] = useState<generalDataI>({} as generalDataI);
  const [grafico, setGrafico] = useState<gamesConsoleI[]>([]);

  useEffect(() => {
    // Função para buscar os dados gerais
    async function getGeneralData() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/dashboard/general`);
        const data = await response.json();
        setDados(data);
        
      } catch (error) {
        console.error("Erro ao buscar os dados gerais:", error);
      }
    }

    async function getGrafico() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/dashboard/consoles`);
        const data = await response.json();
        setGrafico(data);
        console.log(data);
        
      } catch (error) {
        console.error("Erro ao buscar os dados gráficos:", error);
      }
    }

    // Função para buscar os dados dos consoles
    async function getDataGraphic() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/admins`);
        const data = await response.json();
        setGamesConsole(data);
      } catch (error) {
        console.error("Erro ao buscar os dados gráficos:", error);
      }
    }

    getGeneralData();
    getGrafico();
    getDataGraphic();
  }, []); // Executa apenas uma vez na montagem do componente

  // Dados do gráfico
  const data: (["Console", "Amount", { role: string }] | DataRow)[] = [
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

  const colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"];

  grafico.forEach((game, index) => {
    data.push([game.console, game.num, colors[index % colors.length]]);
  })

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-semibold text-gray-800 mb-6">Visão Geral do Sistema</h2>

      {/* Cards de resumo */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {/* Clientes */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center border-t-4 border-blue-500">
          <span className="text-3xl font-bold text-blue-600">{dados.clientes}</span>
          <p className="text-lg text-gray-600 mt-2">N° Clients</p>
        </div>

        {/* Consoles */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center border-t-4 border-red-500">
          <span className="text-3xl font-bold text-red-600">{dados.consoles}</span>
          <p className="text-lg text-gray-600 mt-2">N° Consoles</p>
        </div>

        {/* Games */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center border-t-4 border-green-500">
          <span className="text-3xl font-bold text-green-600">{dados.games}</span>
          <p className="text-lg text-gray-600 mt-2">N° Games</p>
        </div>
      </div>

      {/* Gráfico principal */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <Chart
          chartType="Bar"
          width="100%"
          height="400px"
          data={data}        />
      </div>

      {/* Gráfico de Jogos por Console */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Games by Console</h2>
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="380px"
          data={data}
        />
      </div>
    </div>
  );
}
