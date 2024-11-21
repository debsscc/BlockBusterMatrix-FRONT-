"use client";

import Image from "next/image";
import Link from "next/link";
import { useClienteStore } from "@/context/cliente";
import { useRouter } from "next/navigation";
import { CircleUserRound, ShoppingBasket } from "lucide-react";

export function Header() {
    const { cliente, deslogaCliente } = useClienteStore();
    const router = useRouter();


    function clienteLogout() {
        deslogaCliente();
        if (localStorage.getItem('client_key')) {
            localStorage.removeItem('client_key');
        }
        router.push('/login');
    }

    return (
        <nav className="bg-blue-900 w-full z-20 top-0 start-0 border-b border-yellow-400 sticky">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src="/logo.png" className="h-8" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-yellow-400">
                        Blockbuster Matrix {cliente.id}
                    </span>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-yellow-400 rounded-lg md:hidden hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-blue-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-blue-900">
                        <li>
                            <Link href="/" className="block py-2 px-3 text-yellow-400 bg-blue-700 rounded md:bg-transparent md:text-yellow-400 md:p-0 md:dark:text-yellow-500" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href="#" className="block py-2 px-3 text-white rounded hover:bg-yellow-600 md:hover:bg-transparent md:hover:text-yellow-500 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-yellow-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                        </li>
                        <li>
                            <Link href="#" className="block py-2 px-3 text-white rounded hover:bg-yellow-600 md:hover:bg-transparent md:hover:text-yellow-500 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-yellow-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
                        </li>
                        <li>
                            <div className="flex gap-5">
                                {cliente.id ?
                                    <>
                                        <span className="text-yellow-400">Cliente: {cliente.nome}</span>

                                        <span onClick={clienteLogout} className="block py-2 px-3 text-yellow-400 rounded hover:bg-yellow-600 md:hover:bg-transparent md:hover:text-yellow-500 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-yellow-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                            Exit
                                        </span>
                                    </>
                                    :
                                    <>
                                        <Link href="/login" type="button" className="text-yellow-400 hover:text-blue-500 transition-all focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <CircleUserRound />
                                        </Link>
                                    </>
                                }
                                <Link href="/cart" className="text-yellow-400 hover:text-yellow-500 transition-all focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <ShoppingBasket />
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
