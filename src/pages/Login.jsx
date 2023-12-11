import { Link } from "react-router-dom";
import Eye from "../ui/eye/Eye";
import { useState } from "react";

const Login = () => {
  const [hide, setHide] = useState(true);

  const hidePassword = () => {
    console.log();
    if (hide) {
      setHide(false);
    } else setHide(true);
  };


  return (
    <div className="mx-auto bg-white w-[480px] md:w-[550px] h-[500px] flex flex-col justify-center rounded-md">
      <div className="py-4 text-center">
        <p className="text-4xl text-gray-400 font-light font-sans tracking-wide">
          <span className="font-bold text-gray-700">Login </span>to Spendee
        </p>
        <p className="font-sans mt-2">
          <span>Dontt have an account yet ?</span>
          <Link to="/signup"
            className="text-green-400 underline ms-1"
          >
            Sign up here!
          </Link>
        </p>
      </div>

      <div className="p-3 md:px-24 relative">
        <div className="name flex flex-col">
          <label className="text-gray-400 text-xs" htmlFor="">
            E-mail
          </label>
          <input
            className="mt-1 border p-2 text-md hover:border-gray-300 focus:outline-gray-300"
            type="text"
            placeholder="E-mail address"
            required
          />
        </div>

        <div className="password flex flex-col mt-3">
          <label className="text-gray-400 text-xs" htmlFor="">
            Password
          </label>
          <input
            className="mt-1 border p-2 text-md hover:border-gray-300 focus:outline-gray-300"
            type={hide ? "password" : "text"}
            placeholder="Password"
            required
          />

          {/* -------eye component-------- */}
          <Eye hide={hide} setHide={setHide} hidePassword={hidePassword} />
          {/* -------eye component-------- */}
        </div>
        <div className="btn flex justify-end mt-1">
          <button className="text-gray-400 text-xs underline">
            Forgot password?
          </button>
        </div>
        <div className="mt-3">
          <button className="bg-[#e5ebee] w-full py-2 text-gray-400 font-bold">
            Login to spendee
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;









