"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import useAuth from "../hook/useAuth";
import Loader from "../components/Loader";
import { useState } from "react";

export default function LoginPage() {
  const { register, handleSubmit, reset } = useForm();
  const { login, loading } = useAuth(); // login vem do hook
  const [submitting, setSubmitting] = useState(false); // loader só para envio

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      await login(data); // hook já cuida de autenticar e redirecionar
      toast.success("Login realizado com sucesso!");
    } catch (err) {
      toast.error("E-mail ou senha inválidos.");
      reset();
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <main className="flex min-h-screen items-center justify-center bg-[url('/background-moonflag.png')] relative overflow-hidden">
      <div>
        {/* Animações de fundo */}
        <div className="absolute inset-0 flex justify-center items-center">
          <img src="/moonflag-logo.webp" className="animate-logoEntrada" />
        </div>
        <div className="w-[150px] h-[150px] bg-[var(--seccondary-color)] rounded-4xl blur-[100px] absolute left-[-50px] bottom-[-50px] animate-gradient-x" ></div>
        <div className="w-[150px] h-[150px] bg-[var(--seccondary-color)] rounded-4xl blur-[100px] absolute right-[-50px] top-[-50px] animate-gradient-x" ></div>
        <div className="w-[200px] h-[200px] bg-[var(--seccondary-color)] rounded-[42px] blur-[100px] absolute top-[0px] left-[0px] animate-gradient-translateY" ></div>
        <div className="w-[255px] h-[255px] bg-[var(--seccondary-color)] rounded-[42px] blur-[100px] absolute top-[0px] left-[0px] animate-gradient-translateX delay-75" ></div>
        <div className="w-[300px] h-[300px] bg-[var(--seccondary-color)] rounded-[42px] blur-[100px] absolute bottom-11 left-1/2 animate-gradient-translateUp" ></div>
        <div className="w-[300px] h-[300px] bg-[var(--seccondary-color)] rounded-[42px] blur-[100px] absolute bottom-1/2 right-1/2 animate-gradient-translateDown" ></div>
      </div>
      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-black/60 backdrop-blur-xl border-2 border-white/30 
          p-6 rounded-2xl shadow-lg min-w-80 flex flex-col gap-3 
          z-10 animate-ToUp delay-1000 text-white"
      >
        <label className="flex flex-col gap-1 pb-1.5">
          E-mail
          <input
            {...register("email", { required: true })}
            placeholder="@agmoonflag.com.br"
            className="border border-white/20 bg-white/10 placeholder-white/60 p-2 rounded"
          />
        </label>

        <label className="flex flex-col gap-1 pb-1.5">
          Senha
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="******"
            className="border border-white/20 bg-white/10 placeholder-white/60 p-2 rounded"
          />
        </label>

        <button
          disabled={submitting}
          className="bg-[var(--seccondary-color)] hover:bg-[var(--seccondary-color)]/70 
            p-2 rounded mt-2 cursor-pointer disabled:opacity-50"
        >
          {submitting ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </main>
  );
}
