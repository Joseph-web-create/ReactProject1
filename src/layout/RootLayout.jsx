import { Outlet } from "react-router";
import Nav from "../component/Nav";
import { Categories } from "../component/Categories";
import Footer from "../component/Footer";

const RootLayout = () => {
  return (
    <div>
      <Nav />
      <Categories />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
