import { AppRoutes } from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./store/AuthProvider";

function App() {
  return (
    <>
      <ToastContainer position="top-right" theme="dark" />
      <AuthProvider>
        <AppRoutes/>
      </AuthProvider>
    </>
  );
}

export default App;
