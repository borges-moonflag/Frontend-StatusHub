import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function useAuth() {
  const [status, setStatus] = useState({ loading: true, authenticated: false, user: null });
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("https://backend-statushub.onrender.com/api/users", {
          withCredentials: true,
        });

        setStatus({ loading: false, authenticated: true, user: res.data });
      } catch {
        setStatus({ loading: false, authenticated: false, user: null });
        router.push("/login"); 
      }
    };

    fetchUser();
  }, []);

  return status; 
}
