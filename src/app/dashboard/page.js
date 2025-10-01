"use client";

import axios from "axios";
import Cookies from "js-cookie";
import useAuth from "../hook/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
      await api.post("/auth/logout");
      router.push("/login"); // redireciona após logout
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
