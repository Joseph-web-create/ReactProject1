import { useForm } from "react-hook-form";
import { validateUserName, validatePassword } from "../utils/formValidate";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <div>
      <div className="w-full md:max-w-[320px] mx-auto">
        <h1 className="font-bold text-3xl mb-6">Login to your Account</h1>
        <form className="space-y-4">
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
                {...register('password',{
                  validate:(value)=> validatePassword(value)
                })}
              />
            </label>
            {errors.password && (
              <span className="text-sm text-red-600">{errors.password.message}</span>
            )}
          </div>
          <button className="btn btn-secondary w-full">Continue</button>
        </form>
      </div>
    </div>
  );
};
