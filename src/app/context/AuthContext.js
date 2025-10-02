"use client";

import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "../../lib/api.js";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Checa autenticação inicial
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await api.get("/auth/me", { withCredentials: true });
        setUser(res.data.user);
        setAuthenticated(true);
      } catch (err) {
        setUser(null);
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  // ---- LOGIN ----
  const login = async (credentials) => {
    setLoading(true);
    try {
      await api.post("/auth/login", credentials, { withCredentials: true });
      const res = await api.get("/auth/me", { withCredentials: true });

      if (res.data) {
        setUser(res.data);
        setAuthenticated(true);
        router.push("/dashboard");
      }
    } catch (err) {
      setUser(null);
      setAuthenticated(false);
      throw err; // para o componente poder tratar erro (toast, etc)
    } finally {
      setLoading(false);
    }
  };

  // ---- LOGOUT ----
  const logout = async () => {
    setLoading(true);
    try {
      await api.post("/auth/logout", {}, { withCredentials: true });
      setUser(null);
      setAuthenticated(false);
      router.push("/login");
    } catch (err) {
      console.error("Erro ao deslogar", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ loading, authenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
