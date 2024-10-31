"use client"

import { useEffect, useState } from "react";
import ItemCart from "./ItemCart";
import { GameI } from "@/utils/types/games";

export default function Cart() {

    const [games, setGames] = useState<GameI[]>([])

    useEffect(() => {
        async function getDados() {
            /* fech e uma maneira de buscar certos dados */
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/cart/${localStorage.getItem('client_key')}`)
            const dados = await response.json()
            console.log()
            setGames(dados)
            setCart(games.slice(0, 2))
        }
        getDados()
    }, [])
    const [cart, setCart] = useState<GameI[]>([]);


    const onDelete = (a: GameI) => {
        setCart(cart.filter(game => game !== a));
    }

    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>

                <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                        <div className="space-y-6">
                            {/* Cart list */}
                            {cart.length === 0 ? (
                                <p className="text-red-500 dark:text-white">Your cart is empty ... ( ɵ̥̥‸ɵ̥̥) </p>
                            ) : (
                                cart.map(game => (
                                    <ItemCart data={game} onDelete={onDelete} />
                                ))
                            )}
                            {/* Cart list */}

                        </div>
                    </div>

                    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                            <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                                                    <dl className="flex items-center justify-between gap-4">
                                    {cart.map((game) => (
                                        <>
                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                                            <dd className="text-base font-medium text-gray-900 dark:text-white">${game.price}</dd>
                                        </>
                                    ))}
                                </dl>

                                </div>

                                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                    <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                    <dd className="text-base font-bold text-gray-900 dark:text-white">{cart.reduce((total, game) => total + game.price, 0)}</dd>
                                </dl>
                            </div>

                            <a href="#" className="flex w-full items-center justify-center rounded-lg bg-yellow-500 px-5 py-2.5 text-sm font-medium text-black/75 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">Proceed to Checkout</a>

                            <div className="flex items-center justify-center gap-2">
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                                <a href="/" title="" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                                    Continue Shopping
                                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )

}