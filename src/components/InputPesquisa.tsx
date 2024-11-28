import { GameI } from "@/utils/types/games";
import { set, useForm } from "react-hook-form";

type Inputs = {
    termo: string;
};

type InputPesquisaProps = {
    setGames:
    React.Dispatch<React.SetStateAction<GameI[]>>
}

export function InputPesquisa ({setGames} : InputPesquisaProps) {
    const { register, handleSubmit, reset} = useForm<Inputs>();

    async function onSubmit(data: Inputs) {

        if(data.termo.length < 2) {
            alert("Search at least 2 characters")
            return
        } 

        const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/games/pesquisa/${data.termo}`)
        const dados = await response.json()

        if (dados.length === 0) {
            alert("No games found")
            reset ({termo: ' '})
            return
        } 
        setGames(dados)
    }
    
        async function showDetails(){
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/games/`)
            const dados = await response.json()
            reset ({termo: ''})
            setGames(dados)
        }
    
    return (
        < div className="flex max-w-5xl mx-auto mt-3" >

            <form className="flex-1" onSubmit={handleSubmit(onSubmit)}>   

                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>

                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search your game" required {...register("termo")} />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
            <button type="button" className="ms-3 mt-1 focus:outline-none text-white bg-red-500 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={showDetails}>
                Featured games 
            </button>

        </div>
    );   
}