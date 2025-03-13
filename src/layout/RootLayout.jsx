import { Outlet } from "react-router";
import Nav from "../component/Nav";
import { Categories } from "../component/Categories";

const RootLayout = () => {
  return (
    <div>
      <Nav />
      <Categories />
      <Outlet />
    </div>
  );
};

export default RootLayout;
