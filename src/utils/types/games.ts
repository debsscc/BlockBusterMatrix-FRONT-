import { ConsoleI } from "./consoles"
import { GenreI } from "./genre"

export interface GameI {
    id: number      
    name: string
    year: number
    price: number
    description: string
    photo: string
    genre: GenreI
    destaque: boolean
    developers: string
    createdAt: Date
    updateAt: Date
    console: ConsoleI
}