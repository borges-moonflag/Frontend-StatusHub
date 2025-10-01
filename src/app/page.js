"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "../lib/api"; // seu axios configurado

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/auth/me", { withCredentials: true });
        router.push("/dashboard");
      } catch {
        router.push("/login");
      }
    };
    checkAuth();
  }, [router]);

  return <p>Carregando...</p>;
}
