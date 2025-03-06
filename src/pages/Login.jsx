import { useForm } from "react-hook-form";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { error, isSubmitting },
  } = useForm();

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
              className="input input-lg"
            />
          </label>
          <label className="floating-label">
            <span>PassWord</span>
            <input
              type="password"
              placeholder="Password"
              className="input input-lg"
            />
          </label>
          <button className="btn btn-secondary w-full">Continue</button>
        </form>
      </div>
    </div>
  );
};
