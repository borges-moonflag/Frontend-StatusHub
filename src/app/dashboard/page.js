"use client";
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
        <h1 className="text-2xl font-bold">📊 Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Sair
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sites.map((site) => (
          <div key={site.id} className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold">{site.name}</h2>
            <p>{site.url}</p>
            <p>Status: {site.status}</p>
            <p>Uptime: {site.uptime_percentage}%</p>
          </div>
        ))}
      </div>
    </main>
  );
}
