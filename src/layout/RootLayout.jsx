import { Outlet } from "react-router";
import Nav from "../component/Nav";

const RootLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default RootLayout;
