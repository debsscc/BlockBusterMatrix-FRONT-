import { GameI } from "@/utils/types/games";
import Link from "next/link";

export function ItemGame({ data }: { data: GameI }) {
  return (
    <Link href={`/details/${data.id}`} passHref>
      <div className="w-80 h-96 relative group cursor-pointer">
        {/* Cartão do Jogo com efeito de Hover */}
        <div className="bg-black bg-opacity-70 backdrop-blur-lg border border-gray-300 rounded-xl shadow-lg overflow-hidden transition-all duration-300">
          {/* Imagem com efeito de desfoque */}
          <img
            className="w-full h-full object-cover transform group-hover:scale-105 group-hover:blur-sm transition-all duration-500"
            src={data?.photo}
            alt={data.name}
          />
          {/* Camada de fundo para melhorar a legibilidade (apenas no hover) */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 group-hover:bg-black transition-all duration-300" />
          
          {/* Conteúdo centralizado (apenas no hover) */}
          <div className="p-6 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="text-center text-white">
              <h5 className="text-2xl font-semibold text-shadow-lg">{data.name}</h5>
              <p className="text-sm mt-2 text-shadow-lg">{data.description}</p>
              <p className="text-lg font-semibold mt-2 text-red-600 text-shadow-lg">${data.price}</p>
              <p className="mt-4 text-blue-400 text-shadow-lg">Click to view details</p>
            </div>
          </div>
        </div>
      </div>
      
    </Link>
  );
}
