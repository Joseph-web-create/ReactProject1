import { AuthContext } from ".";

export default function AuthProvider({ children }) {
      
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}
