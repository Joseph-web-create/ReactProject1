import { AuthContext } from ".";
import { useState, useEffect } from "react";
import { getAuthUser } from "../api/auth";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({
    isError: null,
    data: null,
    isAuthenticated: false,
  });

  const [isCheckingAuth, setIsCheckingAuth] = useState(false);
  const accessToken = JSON.parse(localStorage.getItem("userAccessToken"));

  useEffect(() => {
    const getAuth = async () => {
      if (!accessToken) return;
      try {
        setIsCheckingAuth(true);
        const res = await getAuthUser(accessToken);
        if (res.status === 200) {
          setUser({
            isError: null,
            isAuthenticated: true,
            data: res.data,
          });
        }
      } catch (error) {
        setUser({
          isError: error.response.data.message,
          isAuthenticated: false,
          data: null,
        });
      } finally {
        setIsCheckingAuth(false);
      }
    };
    getAuth();
  }, [accessToken, setIsCheckingAuth]);

  return (
    <AuthContext.Provider value={{ user, isCheckingAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
