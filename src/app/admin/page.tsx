"use client";

import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from 'sonner'
import { useRouter } from "next/navigation"

import Cookies from "js-cookie"

type Inputs = {
    email: string
    password: string
}



export default function HomeAdmin() {
    const { register, handleSubmit, setFocus } = useForm<Inputs>()
    const router = useRouter()

    useEffect(() => {
        setFocus("email")
    }, [])

    async function verificaLogin(data:Inputs) {
        const response = await fetch("http://localhost:3000/api/admin/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email: data.email, senha: data. password}),
        })
        
        if (response.status == 200) {
            const admin = await response.json()
            Cookies.set("admin_logado_id", admin.id)
            Cookies.set("admin_logado_name", admin.name)
            Cookies.set("admin_logado_email", admin.email)

            router.push("/admin/dashboard")
        } else if (response.status == 400) { 
            toast.error("Error...Login or password invalid")
        }
    }



    return (
    <main className="max-w-screen-xl flex flex-col items-center mx-auto p-6">
        <img src="public/logo.png" alt="logo" style = {{width: 240}}
        className="d-block"/>
      <div className="max-w-sm">
        <h1 className="text-3x1 font-bold my-8">Admin: Blockbuster Matrix</h1>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit(verificaLogin)}>
        <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" {...register("email")} required />
        </div>
        <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("password")} required />
        </div>
        <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </div>
    </main>
 );
}	