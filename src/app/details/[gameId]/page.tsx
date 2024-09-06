"use client"
import { GameI } from "@/utils/types/games"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Details() {
    const params = useParams()

    const [game, setGame] = useState<GameI>()

    useEffect(()=> {
        async function getDados() {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/games/${params.gameId}`)
            const dados = await response.json()
            setGame(dados)
        }
        getDados()
    }, [])

    return (
        <section className="max-w-screen-xl mx-auto mt-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{game?.name}</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400">{game?.description}</p>
            <img src={game?.photo} alt={game?.name} className="mt-4" />
        </section>
    )
}
