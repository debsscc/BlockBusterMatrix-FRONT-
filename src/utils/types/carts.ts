import { ProdutoI } from "./produtos"

export interface CartI {
    id    :    String       
    clienteId : String
    createdAt : Date
    updateAt  : Date
    produtos  : ProdutoI[]
    total  :    number
}