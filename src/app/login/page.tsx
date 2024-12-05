"use client"

import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useClienteStore } from "@/context/cliente";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";

type Inputs = {
    email: string
    password: string
    continuar: boolean
}

/* FUNCTION LOGIN */
export default function Login() {
    const { register, handleSubmit } = useForm<Inputs>(); 
    const router = useRouter()
    const { logaCliente } = useClienteStore()
    
    async function verificaLogin(data: Inputs) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/login`, 
            {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({email: data.email, senha: data.password})
            }
        )
        if (response.status == 200) {
            const dados = await response.json()
            logaCliente(dados)
            if (data.continuar) {
                localStorage.setItem('client_key', dados.id)
            } else {
                localStorage.removeItem('client_key')
            }
            router.push('/')
        } else {
            alert("Error... Login or password incorrect.")
        }
    }

    return (
        <section className="relative bg-gradient-to-br from-gray-900 to-indigo-800 min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background blur effect */}
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-lg opacity-30" style={{ backgroundImage: "url('https://path-to-your-background-image.jpg')" }}></div>
    
    <div className="relative w-full max-w-md bg-white bg-opacity-80 rounded-lg shadow-lg backdrop-blur-md dark:bg-gray-800 dark:bg-opacity-70">
        <div className="p-8 space-y-6">
            {/* Logo */}
            <div className="flex justify-center mb-4">
                        <Image 
                            src="/logo.png" 
                            alt="Logo" 
                            className="h-20" 
                            width={80} 
                            height={80} 
                        />
                    </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                Sign in to your account
            </h1>
            <form className="space-y-6" onSubmit={handleSubmit(verificaLogin)}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-400">Email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required {...register("email")} />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-gray-400">Password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="••••••••" required {...register("password")} />
                </div>
                <div className="flex items-center justify-between">
                    <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" {...register("continuar")} />
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                    </label>
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-500">Forgot password?</a>
                </div>
                <button type="submit" className="w-full py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium">
                    Sign in
                </button>
            </form>
            <div className="flex items-center justify-center mt-6">
                <span className="text-sm text-gray-600 dark:text-gray-400">Don’t have an account yet? <Link href="login/cadastro" className="text-indigo-600 font-medium hover:underline dark:text-indigo-500">Sign up</Link></span>
            </div>
            <button type="button" className="w-full flex items-center justify-center py-3 mt-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800" onClick={() => router.push('/admin')}>
                <CircleUserRound className="mr-2" size={20} /> Admin
            </button>
            </div>
        </div>
    </section>
    )
}
