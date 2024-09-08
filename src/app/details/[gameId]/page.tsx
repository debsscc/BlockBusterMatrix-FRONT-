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
        <section className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100 dark:bg-gray-900 p-4">
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md md:flex-row md:w-full md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                {/* Photo from game.photo (bd)*/}
                <img src={game?.photo} alt={game?.name} className="object-cover w-full rounded-t-lg h-80 md:h-auto md:w-1/3 md:rounded-none md:rounded-l-lg" />
                
                {/* Name and description*/}
                <div className="flex flex-col justify-between p-4 leading-normal w-full md:w-2/3">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{game?.name}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{game?.description}</p>
                    
                    {/* Stars div*/}
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            {/* SVG stars */}
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                    </div>
    
                    {/* Additional information */}
                    <hr className="my-3 mt-2 border-t border-gray-300 dark:border-gray-600" />
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Release Year: {game?.year || 'N/A'} ⎮ 
                        Game Genre: {game?.genre || 'N/A'} ⎮ 
                        <span className="text-red-600 dark:text-red-500">
                        Price for Rent:
                            ${game?.price || 'N/A'}
                        </span>
                    </p>
                </div>
            </a>
    
            {/* Comeback button */}
            <div className="flex items-center space-x-4 mt-8">
                <button 
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
                    onClick={() => window.location.href = "/"} 
                >
                    Back to HomePage
                </button>
                <button 
                    className="px-4 py-2 bg-yellow-300 text-black font-semibold rounded-lg shadow-md hover:bg-green-400 transition duration-300 ease-in-out"
                    onClick={() => window.location.href = "/games"}
                >
                    Add to Cart 🛒
                </button>
            </div>
        </section>
    )
}
