"use client";

import Link from "next/link.js";
import useAuth from "../../hook/useAuth.js";
import UserIcon from "../Icons/userIcon.jsx";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <div className="flex items-center justify-between mb-6 p-3.5">
      <img src="/moonflag-logo.webp" alt="Logo da Moonflag" />

      <div className="flex items-center">
        <div className="mr-6 text-[var(--primary-color)]">
          <Link href="/dashboard/perfil" className="flex items-center rounded gap-1.5 py-2 px-3 text-[16px] text-[var(--primary-color)] font-normal leading-[22px] transition-all duration-300 hover:bg-[var(--primary-color)]/30"><UserIcon className="w-6 h-6" fillColor="fill-[var(--primary-color)]"/> Perfil</Link>
        </div>
        <button
          onClick={logout}
          className="bg-[var(--seccondary-color)] text-[16px] text-[var(--primary-color)] font-normal leading-[22px] px-5 py-2 rounded cursor-pointer hover:bg-[var(--seccondary-color)]/70"
        >
          Sair
        </button>
      </div>
    </div>
  );
}
