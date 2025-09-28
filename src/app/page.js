"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    if (token) {
      router.push("/dashboard"); // se logado vai pro dashboard
    } else {
      router.push("/auth/login"); // se não logado vai pro login
    }
  }, [router]);

  return <p>Carregando...</p>;
}
