"use client";

import React, { Key, useEffect, useState } from "react";
import ItemCart from "./ItemCart";
import Link from "next/link";
import { useClienteStore } from "@/context/cliente";
import { CartI } from "@/utils/types/carts";

export default function Cart() {
    const { cliente, logaCliente } = useClienteStore()
    const [cart, setCart] = useState<CartI>();

    useEffect(() => {
        async function getDados() {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/cart/${cliente.id}`);
            const dados = await response.json();
            setCart(dados); // Apenas como exemplo, você pode ajustar isso conforme necessário
            // setGames(dados);
            console.log(dados);
            setCart(dados);
            console.log(cart?.id);
        }
        getDados();
        
        
    }, [cliente.id]);

    const listaCarrinho = cart?.produtos.map((cart => (
        <ItemCart key={cart.id} data={cart} />
    )));

    // const onDelete = (a: GameI) => {
    //     setCart(cart.filter(game => game !== a));
    // };

    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>

                <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                        <div className="space-y-6">
                            {/* Cart list */}
                            {cart?.produtos.length === 0 ? (
                                <p className="text-red-500 dark:text-white">Your cart is empty ... ( ɵ̥̥‸ɵ̥̥) </p>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {listaCarrinho}
                                </div>
                            )}
                            {/* Cart list */}
                        </div>
                    </div>

                    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800 sm:p-8">
                            <p className="text-xl font-semibold text-gray-900 dark:text-white">Order Summary</p>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <dl className="flex items-center justify-between gap-4">
                                        {/* {cart.map((game) => ( */}
                                            {/* <React.Fragment key={game.id as Key}> */}
                                                {/* <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt> */}
                                                {/* <dd className="text-base font-medium text-gray-900 dark:text-white">${cart.total}</dd> */}
                                            {/* </React.Fragment> */}
                                        {/* ))} */}
                                    </dl>
                                </div>

                                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                    <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                                        {/* ${cart.reduce((total, game) => total + game.price, 0)} */}
                                    </dd>
                                </dl>
                            </div>

                            <a href="#" className="w-full flex justify-center items-center bg-yellow-500 text-black py-2.5 rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out">
                                Proceed to Checkout
                            </a>

                            <div className="flex items-center justify-center gap-2">
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                                <Link href="/" title="" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                                    Continue Shopping
                                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
