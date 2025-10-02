// "use client";

// import { useEffect, useState } from "react";
// import api from "../../lib/api";

// export default function useAuth() {
//   const [loading, setLoading] = useState(true);
//   const [authenticated, setAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const res = await api.get("/auth/me", { withCredentials: true });
//         setUser(res.data.user);
//         setAuthenticated(true);
//       } catch (err) {
//         setAuthenticated(false);
//         setUser(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkAuth();
//   }, []);

//   return { loading, authenticated, user };
// }
// src/hooks/useAuth.js"use client";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";

export default function useAuth() {
  return useContext(AuthContext);
}
