"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2"; // Biblioteca SweetAlert
import { GenreI } from "@/utils/types/genre";
import { ConsoleI } from "@/utils/types/consoles";
import { GameI } from "@/utils/types/games";
import { 
  PencilIcon, 
  CurrencyDollarIcon, 
  CameraIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";

type InputGame = {
  name: string; 
    year: number,
    price: number,
    photo: string,
    genre: GenreI,
    developers: string,
    description: string,
    destaque: boolean,
    consoleId: number
};


export default function Manager() {
  const [games, setGames] = useState<GameI[]>([]);
  const [consoles, setConsoles] = useState<ConsoleI[]>([]);

  const {register, handleSubmit} = useForm<InputGame>();

  // Fetch games and consoles
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL_API}/games`)
      .then((res) => res.json())
      .then(setGames)
      .catch((err) => console.error(err));
      async function getConsoles() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/consoles`)
      const dados = await response.json()
      setConsoles(dados)
      console.log(dados)

    }
    getConsoles();

    
      
  }, []);

  // Handlers for adding a game
  async function addGames(data: InputGame) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          name: data.name,
          year: Number(data.year),
          price: data.price,
          photo: data.photo,
          genre: data.genre,
          developers: data.developers,
          description: data.description,
          destaque: data.destaque,
          consoleId: Number(data.consoleId),
        }
      ),
    });

    if (response.status === 201) {
      const game = await response.json();
      setGames([...games, game]);
      Swal.fire({
        icon: "success",
        title: "Game added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const error = await response.json();
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error adding game",
        text: error.message,
      });
    }
  }

  const selectConsole = consoles.map((console) => (
    <option key={console.id} value={console.id}>
      {console.name}
    </option>
  ))

  async function DeleteGames (id: number) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/games/${id}`, {
      method: "DELETE",
    });

    if (response.status === 200) {
      const game = await response.json();
      setGames([...games, game]);
      Swal.fire({
        icon: "success",
        title: "Game deleted successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const error = await response.json();
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error deleting game",
        text: error.message,
      });
    }
  }
  

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 shadow-lg">
        <h1 className="text-4xl font-extrabold text-center">Blockbuster Admin Dashboard</h1>
        <p className="text-center text-lg mt-2">Manage your games and consoles with ease!</p>
      </header>

      {/* Content */}
      <div className="container mx-auto p-8 w-full">
          {/* Add Game Card */}
          <form className="bg-gradient-to-r from-blue-900 to-blue-900 rounded-lg shadow-xl p-8 flex flex-col space-y-4 w-3/4 mx-auto" onSubmit={handleSubmit(addGames)}>
            <h2 className="text-2xl font-semibold text-center text-yellow-500">Add New Game</h2>

            <label className="text-white" htmlFor="name">Game Name</label>
            <div className="flex items-center border p-3 rounded-lg bg-white">
              <PencilIcon className="h-6 w-6 text-gray-500 mr-3" />
              <input
                type="text"
                id="name"
                placeholder="Game Name"
                className="flex-1 bg-transparent outline-none text-gray-900"
                {...register("name")}
              />
            </div>

            {/* Year */}
            <label className="text-white" htmlFor="year">Year</label>
            <input
              type="number"
              id="year"
              placeholder="Year (e.g., 2000)"
              className="border p-3 rounded-lg bg-white text-gray-900"
              {...register("year")}
            />

            {/* Developers */}
            <label className="text-white" htmlFor="developers">Developers</label>
            <input
              type="text"
              id="developers"
              placeholder="developers (e.g., Ubisoft)"
              className="border p-3 rounded-lg bg-white text-gray-900"
              {...register("developers")}
            />

            {/* Price */}
            <label className="text-white" htmlFor="price">Price</label>
            <div className="flex items-center border p-3 rounded-lg bg-white">
              <CurrencyDollarIcon className="h-6 w-6 text-gray-500 mr-3" />
              <p className="text-gray-900 mr-3"> R$ </p>
              <input
                type="number"
                step="0.01"
                id="price"
                placeholder="Price"
                className="flex-1 bg-transparent outline-none text-gray-900"
                {...register("price")}
              />
            </div>

            {/* Photo URL */}
            <label className="text-white" htmlFor="photo">Photo URL</label>
            <div className="flex items-center border p-3 rounded-lg bg-white">
              <CameraIcon className="h-6 w-6 text-gray-500 mr-3" />
              <input
                type="text"
                id="photo"
                placeholder="Photo URL"
                className="flex-1 bg-transparent outline-none text-gray-900"
                {...register("photo")}
              />
            </div>

            {/* Description */}
            <label className="text-white" htmlFor="description">Game Description</label>
            <textarea
              id="description"
              placeholder="Game Description"
              className="border p-3 rounded-lg bg-white text-gray-900"
              {...register("description")}
            ></textarea>

            {/* Genre */}
            <label className="text-white" htmlFor="genre">Genre</label>
            <select
              id="genre"
              className="border p-3 rounded-lg bg-white text-gray-900"
              {...register("genre")}
            >
              {Object.values(GenreI).map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>

            {/* Console */}
            <label className="text-white" htmlFor="consoleId">Select Console</label>
            <select
              id="consoleId"
              className="border p-3 rounded-lg bg-white text-gray-900"
              {...register("consoleId")}
            >
              <option value="">Select Console</option>
              {selectConsole}
            </select>

            {/* Featured Checkbox */}
            <label className="flex items-center text-white">
              <input
                type="checkbox"
                {...register("destaque")}
                className="mr-2"
              />
              Featured
            </label>

            {/* Add Game Button */}
            <button
            type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded-lg hover:bg-yellow-500 transition font-semibold"
            >
              Add Game
            </button>
          </form>
        </div>
      

        {/* List of Games */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-white">Game List</h2>
          <ul className="mt-4 space-y-4 mx-auto">
            {games.map((game) => (
              <li key={game.id} className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4">
                <img src={game.photo} alt={game.name} className="h-16 w-16 object-cover rounded-md" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{game.name}</h3>
                  <p className="text-gray-400">{game.description}</p>
                  <p className="text-gray-400">Price: ${game.price}</p>
                </div>
                <button
                  onClick={() => DeleteGames(game.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <TrashIcon className="h-6 w-6" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
  );
};