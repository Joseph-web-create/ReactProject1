import { AuthContext } from ".";
import { useState, useEffect } from "react";

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
          
      } catch (error) {
          
      }
    };
  }, []);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
