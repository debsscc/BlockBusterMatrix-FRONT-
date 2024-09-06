import { GameI } from "@/utils/types/games";
import Link from "next/link";

export function ItemGame({ data }: { data: GameI }) {
  return (
    <div className="mx-auto max-w-screen-xl">

      {/* GRID GAMES */}

        <div className="bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="w-full h-48 object-cover rounded-t-md" src={data?.photo} alt="" />
          </a>
          <div className="p-3">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name} </h5>

            </a>
            <p className="mb-2 text-gray-700 dark:text-gray-400">{data.description} </p>
            
            <hr className="my-3 mt-2 border-t border-gray-300 dark:border-gray-600" />

            <p> Price for Rent $ {data.price}</p>
            <Link href={`/details/${data.id}`} type="button" className="mt-6 px-3 py-2  text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more  ➥࣪
            </Link>

          </div>

        </div>
    </div>
  )
}