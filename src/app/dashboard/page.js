"use client";

import useAuth from "../hook/useAuth";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { useEffect } from "react";

export default function Dashboard() {
  const { loading, authenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authenticated) {
      router.push("/login");
    }
  }, [loading, authenticated, router]);

  if (loading) return <Loader />;

  if (!authenticated) return null;

  return (
    <section className="w-dvw h-dvh bg-white">
      <main className="p-6">
        {/* Navbar já traz o botão de sair */}
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="p-4 bg-gray-100 rounded shadow">Card 1</div>
          <div className="p-4 bg-gray-100 rounded shadow">Card 2</div>
        </div>
      </main>
    </section>
  );
}
