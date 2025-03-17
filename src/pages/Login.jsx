import { useForm } from "react-hook-form";
import { validateUserName, validatePassword } from "../utils/formValidate";
import { loginUser } from "../api/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "../store";

export const Login = () => {
  const [revealPassword, setRevealPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();

  const { setUserToken, setRefreshToken } = useAuth();
  const togglePassword = () => {
    setRevealPassword((prev) => !prev);
  };

  const submitForm = async (formData) => {
    try {
      const { data, status } = await loginUser(formData);
      if (status === 200) {
        toast.success(`Welcome ${data.firstName}`, { toastId: "loginSuccess" });
        setUserToken(data.accessToken);
        setRefreshToken(data.refreshToken);
        navigate("/");

      }
      console.log("Form input needed", formData);
    } catch (error) {
      toast.error(error.response.data.message, { toastId: "errorLogin" });
    }
    
    
  };
  return (
    <div>
      <div className="w-full md:max-w-[320px] mx-auto">
        <h1 className="font-bold text-3xl mb-6">Login to your Account</h1>
        <form className="space-y-4" onSubmit={handleSubmit(submitForm)}>
          <div>
            <label className="floating-label">
              <span>UserName</span>
              <input
                type="text"
                placeholder="Username"
                className="input input-lg"
                id="username"
                {...register("username", {
                  validate: (value) => validateUserName(value),
                })}
              />
            </label>
            {errors.username && (
              <span className="text-sm text-red-600">
                {errors.username.message}
              </span>
            )}
          </div>

          <div className="relative">
            <label className="floating-label">
              <span>PassWord</span>
              <input
                type={revealPassword ? "text" : "password"}
                placeholder="Password"
                className="input input-lg"
                id="password"
                {...register("password", {
                  validate: (value) => validatePassword(value),
                })}
              />
            </label>
            <button
              className="absolute inset-y-0 right-2"
              onClick={togglePassword}
              type="button"
            >
              {revealPassword ? (
                <i className="ri-eye-line"></i>
              ) : (
                <i className="ri-eye-off-line"></i>
              )}
            </button>
          </div>
          {errors.password && (
            <span className="text-sm text-red-600">
              {errors.password.message}
            </span>
          )}
          <button
            className="mt-4 btn btn-secondary w-full"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              "continue"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
