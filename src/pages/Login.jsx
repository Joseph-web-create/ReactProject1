import React from "react";

export const Login = () => {
  return (
    <div>
      <div className="w-full md:max-w-[320px] mx-auto">
        <h1 className="font-bold text-3xl mb-6">Login to your Account</h1>
        <form className="space-y-4">
          <label className="floating-label">
            <span>UserName</span>
            <input
              type="text"
              placeholder="Username"
              className="input input-md"
            />
          </label>
          <label className="floating-label">
            <span>PassWord</span>
            <input
              type="password"
              placeholder="Password"
              className="input input-md"
            />
          </label>
        </form>
      </div>
    </div>
  );
};
