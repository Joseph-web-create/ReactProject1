import { Outlet } from "react-router";
import ShoppingImage from "../assets/ShopingImg.jpg";

export const AuthLayout = () => {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-12 items-center justify-center min-h-screen gap-4">
        <div className="col-span-12 md:col-span-6 h-full">
          <img
            src={ShoppingImage}
            alt="Shopping"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <Outlet />
        </div>
      </div>
    </section>
  );
}; 
