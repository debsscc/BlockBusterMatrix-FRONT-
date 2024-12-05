"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useClienteStore } from "@/context/cliente";
import { CircleUserRound } from "lucide-react";
import Swal from 'sweetalert2';

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

export default function Register() {
  const { register, handleSubmit } = useForm<Inputs>();
  const router = useRouter();
  const { logaCliente } = useClienteStore();

  async function cadastraUsuario(data: Inputs) {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/clientes`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        nome: data.name,
        email: data.email,
        senha: data.password,
      }),
    });

    if (response.status === 201) {
      const dados = await response.json();
      logaCliente(dados);
      Swal.fire('Success', 'User registered successfully', 'success');
      router.push("/");
    } else {
      alert("Error... Unable to register.");
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-indigo-800 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background blur effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-lg opacity-30"
        style={{
          backgroundImage: "url('https://path-to-your-background-image.jpg')",
        }}
      ></div>

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
            Create your account
          </h1>
          <form className="space-y-6" onSubmit={handleSubmit(cadastraUsuario)}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Your name"
                required
                {...register("name")}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
                {...register("email")}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="••••••••"
                required
                {...register("password")}
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="••••••••"
                required
                {...register("confirmPassword")}
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                {...register("terms")}
                required
              />
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                I accept the terms and conditions
              </span>
            </div>
            <button
              type="submit"
              className="w-full py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium"
            >
              Sign up
            </button>
          </form>
          <div className="flex items-center justify-center mt-6">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-indigo-600 font-medium hover:underline dark:text-indigo-500"
              >
                Sign in
              </a>
            </span>
          </div>
          <button
            type="button"
            className="w-full flex items-center justify-center py-3 mt-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800"
            onClick={() => router.push("/admin")}
          >
            <CircleUserRound className="mr-2" size={20} /> Admin
          </button>
        </div>
      </div>
    </section>
  );
}
