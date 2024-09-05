import { GameI } from "@/utils/types/games";

export function ItemGame ({data} : {data: GameI}) {
    return (
        <div className="mx-auto max-w-screen-xl">

        {/* GRID GAMES */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">

          {/* ItemGame */}


          <div className="max-w-64 bg-white border border-purple-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="flex mx-auto w-40 rounded-t-md" src="./ben10.jpg" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name} </h5>
                
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.description} | {data.year} </p>
              <button type="button" className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more  ➥࣪
              </button>            

            </div>

          </div>
        </section>
        </div>
    )
}