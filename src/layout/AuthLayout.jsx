import React from "react";
import { Outlet } from "react-router";

export const AuthLayout = () => {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6"></div>
      </div>
      <div className="col-span-12 md:col-span-6">
        <Outlet />
      </div>
    </section>
  );
};
