import { useForm } from "react-hook-form";
import { validateUserName, validatePassword } from "../utils/formValidate";
import { loginUser } from "../api/auth";
import { toast } from "react-toastify";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const submitForm = async (formData) => {
    try {
      const { data, status } = await loginUser(formData);
      if (status === 200) {
        toast.success(`Welcome ${data.firstName}`,{toastId:'loginSuccess'})
      }
    } catch (error) {
      toast.error(error.response.data.message,{toastId:'errorLogin'})
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

          <div>
            <label className="floating-label">
              <span>PassWord</span>
              <input
                type="password"
                placeholder="Password"
                className="input input-lg"
                id="password"
                {...register("password", {
                  validate: (value) => validatePassword(value),
                })}
              />
            </label>
            {errors.password && (
              <span className="text-sm text-red-600">
                {errors.password.message}
              </span>
            )}
          </div>
          <button
            className="btn btn-secondary w-full"
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
