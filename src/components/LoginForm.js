import React from "react";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
function LoginForm({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    toast.success("Successfully Logged in");
    setIsLoggedIn(true);
    navigate("/dashboard");
  }
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
      <label className="w-full">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Enter email address<sup className="text-pink-200">*</sup>
        </p>
        <input
          className="w-full p-[12px] bg-richblack-800 rounded-sm text-richblack-5 border"
          required
          type="email"
          name="email"
          placeholder="Enter your email address"
          onChange={changeHandler}
          value={formData.email}
        />
      </label>
      <label className="relative">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Enter password<sup className="text-pink-200">*</sup>
        </p>
        <input
          className="w-full p-[12px] bg-richblack-800 rounded-sm text-richblack-5 border"
          required
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter your Password"
          onChange={changeHandler}
          value={formData.password}
        />
        <span
          className="absolute right-4 top-[38px] cursor-pointer"
          onClick={() => setShowPassword((prevData) => !prevData)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible color="white" fontSize={24} />
          ) : (
            <AiOutlineEye color="white" fontSize={24} />
          )}
        </span>

        <NavLink to="#">
          <p className="max-w-max ml-auto text-sm mt-1 text-blue-100">
            Forget Password
          </p>
        </NavLink>
        <br />
        <button className="bg-yellow-500 w-full p-2 rounded font-semibold">
          Sign In
        </button>
      </label>
    </form>
  );
}

export default LoginForm;
