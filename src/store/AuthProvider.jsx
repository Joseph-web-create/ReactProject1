import { AuthContext } from ".";
import { useState, useEffect } from "react";
import { getAuthUser } from "../api/auth";
import useLocalStorage from "../Hooks/useLocalStorage";
import { toast } from "react-toastify";

export default function AuthProvider({ children }) {
  const [userToken, setUserToken] = useLocalStorage("userAccessToken", null);
  const [refreshToken, setRefreshToken] = useLocalStorage("refreshToken", null);
  const [user, setUser] = useState({
    isError: null,
    data: null,
    isAuthenticated: false,
  });

  const [isCheckingAuth, setIsCheckingAuth] = useState(false);
  // const accessToken = JSON.parse(localStorage.getItem("userAccessToken"));

  useEffect(() => {
    const getAuth = async () => {
      if (!userToken) return;
      try {
        setIsCheckingAuth(true);
        const res = await getAuthUser(userToken);
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
  }, [userToken, setIsCheckingAuth]);

  const handleLogout = () => {
    setUserToken(null);
    setRefreshToken(null);
    setUser({
      isError: null,
      isAuthenticated: false,
      data: null,
    });
    toast.success("Logged Out");
  };

  console.log({ userToken, refreshToken });

  return (
    <AuthContext.Provider
      value={{
        user,
        isCheckingAuth,
        setUserToken,
        setRefreshToken,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
