"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import axios from "axios";

export default function Dashboard() {
  const [sites, setSites] = useState([]);
  const router = useRouter();
  
      const api = axios.create({
  baseURL: "https://backend-statushub.onrender.com/api", // backend Node
});

  useEffect(() => {
    const fetchSites = async () => {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      if (!token) return;

      const res = await api.get("/sites", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setSites(res.data);
    };
    fetchSites();
  }, []);

  const handleLogout = () => {
    // Apaga o cookie
    document.cookie =
      "token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";

    router.push("/auth/login");
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
