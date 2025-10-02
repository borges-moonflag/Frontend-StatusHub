"use client";

import useAuth from "../../hook/useAuth.js";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <div className="flex items-center justify-between mb-6">
      <img src="/moonflag-logo.webp" alt="Logo da Moonflag" />
      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Sair
      </button>
    </div>
  );
}
