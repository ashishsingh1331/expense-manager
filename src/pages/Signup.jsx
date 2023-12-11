import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Eye from "../ui/eye/Eye";

const Signup = () => {
  const navigate = useNavigate();
  const [hide, setHide] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const hidePassword = () => {
    console.log();
    if (hide) {
      setHide(false);
    } else setHide(true);
  };

  const redirect = (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      document.querySelector(".alert ").innerHTML = "password didn't match";
      setTimeout(() => {
        document.querySelector(".alert ").innerHTML = "";
      }, 3000);
    } else {
      toast.success("Signup Successfull", {
        position: "top-right",
      });
      navigate("/dashboard");
    }
  };

  return (
      <div className="mx-auto bg-white w-[480px] md:w-[550px] h-[500px] flex flex-col justify-center rounded-md">
        <div className="py-4 text-center">
          <p className="text-4xl text-gray-400 font-light font-sans tracking-wide">
            <span className="font-bold text-gray-700">Signup </span>to Spendee
          </p>
          <p className="font-sans mt-2">
            Existing User ?
            <button onClick={() => navigate("/login")} className="text-green-400 underline ms-1">Login in</button>
          </p>
        </div>

        <form
          method="post"
          onSubmit={redirect}
          className="p-3 md:px-24 relative"
        >
          <div className="name flex flex-col">
            <label className="text-gray-400 text-xs" htmlFor="name">
              Name
            </label>
            <input
              className="mt-1 border p-2 text-md hover:border-gray-300 focus:outline-gray-300"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Username"
              required
            />
          </div>

          <div className="flex flex-col mt-3">
            <label className="text-gray-400 text-xs" htmlFor="password">
              Password
            </label>
            <input
              className="mt-1 border p-2 text-md hover:border-gray-300 focus:outline-gray-300"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={hide ? "password" : "text"}
              placeholder="Password"
              required
            />

            {/* ------eye component---- */}
            <Eye hide={hide} hidePassword={hidePassword} />
            {/* ------eye component---- */}
          </div>

          <div className="flex flex-col mt-3">
            <label className="text-gray-400 text-xs" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="mt-1 border p-2 text-md hover:border-gray-300 focus:outline-gray-300"
              type="password"
              value={confirmPass}
              name="confirmPassword"
              onChange={(e) => setConfirmPass(e.target.value)}
              placeholder="Confirm Password"
              required
            />
            <p className="alert text-xs text-red-500"></p>
          </div>
          <div className="mt-5">
            <button className="bg-[#e5ebee] w-full py-2 text-gray-400 font-bold">
              Get Started
            </button>
          </div>
        </form>
      </div>
  );
};

export default Signup;
