import { useEffect, useState } from "react";
import { getUser } from "@/app/lib/api";
import { UserProps } from "@/app/context/AuthContext";

const useUser = (id: string) => {

  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser(id);
        setUser(data.results)
      } catch (err) {
        setError('Failed to load courses: ' + err.message);
      } finally {
        setLoading(false)
      }
    };

    fetchUser();
  }, [id]);

  return { user, loading, error };
};

export default useUser;
