"use client"
import { InputPesquisa } from "@/components/InputPesquisa";
import { ItemGame } from "@/components/ItemGame";
import { useClienteStore } from "@/context/cliente";
import { GameI } from "@/utils/types/games";
import { useEffect, useState } from "react";


export default function Home() {
  const [games, setGames] = useState<GameI[]>([])

  const {logaCliente} = useClienteStore()
  

  useEffect(() => {

    async function loga(userId: string) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/clientes/${userId}`)
      if (response.status == 200) {
        const dados = await response.json()
        logaCliente(dados)
      }
    }

    if (localStorage.getItem('client_key')) {
      const userId = localStorage.getItem('client_key') as string
      loga(userId)
    }
    async function getDados() {
      /* fech e uma maneira de buscar certos dados */
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/games`)
      const dados = await response.json()
      console.log()
      setGames(dados)
    }
    getDados()
  }, [])

const listGames = games.map(game => (
  <ItemGame data={game} key={game.id} />
))


  return (
    <>
      <div><InputPesquisa setGames={setGames} /></div>
      <div className="mx-auto max-w-screen-xl">
        <h1 className="mt-4 mb-4 text-w-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-6xl dark:text-white">BlockBuster Matrix <span className="text-red-600 dark:text-red-500">the worlds #1</span> rental house game.</h1>
        <p className="mt-2 mb-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here are the Blockbuster Matrix, where you can rent games online! Search for see!</p>

        {/* GRID GAMES */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">

          {listGames}

        </section>

      </div>
    </>
  );
}
