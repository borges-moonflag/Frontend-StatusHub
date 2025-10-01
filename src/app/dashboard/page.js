"use client";

import useAuth from "../hook/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api from "../../lib/api";

export default function Dashboard() {

  const { loading, authenticated, user } = useAuth();
  const router = useRouter();

  if (loading) return <p>Carregando...</p>;
  if (!authenticated) {
    router.push("/login");
    return null;
  }

const handleLogout = async () => {
  try {
    // Chama o endpoint de logout
    const res = await api.post("/auth/logout", {}, { withCredentials: true });

    // Só redireciona se o backend confirmou que o cookie foi removido
    if (res.data.message === "Logout realizado com sucesso") {
      console.log("Token removido do cookie com sucesso!");
      router.push("/login");
    } else {
      console.error("Logout não confirmado pelo backend");
    }
  } catch (err) {
    console.error("Erro ao deslogar:", err);
  }
};


  return (
    <main className="p-6">
      <div className="flex items-center justify-between mb-6">
        <img src="./moonflag-logo.webp" alt="Logo da Moonflag" />
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Sair
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
      </div>
    </main>
  );
}
