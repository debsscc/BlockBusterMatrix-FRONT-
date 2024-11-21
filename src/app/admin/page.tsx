"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type Inputs = {
  email: string;
  password: string;
  remember: boolean; 

};

export default function LoginAdmin() {
  const { register, handleSubmit, setFocus } = useForm<Inputs>();
  const router = useRouter();

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  async function verificaLogin(data: Inputs) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/admin/login`, {
        method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.email, senha: data.password }),
    });

    if (response.status === 200) {
      const admin = await response.json();
      sessionStorage.setItem("admin_id", admin.id);
      sessionStorage.setItem("admin_name", admin.name);
      sessionStorage.setItem("admin_email", admin.email);

      router.push("/admin/dashboard");
    } else {
      alert("Error... Login or password invalid.");
    }
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg border-2 border-gray-700">
        <div className="text-center mb-6">
          <img src="/logo.png" alt="Logo" className="w-40 mx-auto mb-4" />
          <h1 className="text-3xl font-semibold text-white">Admin: Blockbuster Matrix</h1>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(verificaLogin)}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-700 border border-gray-600 text-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-3"
              placeholder="name@email.com"
              {...register("email")}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-700 border border-gray-600 text-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-3"
              placeholder="••••••••"
              {...register("password")}
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-2 focus:ring-gray-500"
              {...register("remember")}
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-400">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
