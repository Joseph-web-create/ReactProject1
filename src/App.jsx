import { AppRoutes } from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer position="top-right" theme="dark"/>
      <AppRoutes />
    </>
  );
}

export default App;
