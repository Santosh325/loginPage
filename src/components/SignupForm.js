import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
function SignupForm({ setIsLoggedIn }) {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const navigate = useNavigate();
  function submitHandler(event) {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Password did not match");
      return;
    }
    toast.success("Successfully Signup");
    setIsLoggedIn(true);
    navigate("/dashboard");
  }
  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-4 mt-6"
      >
        <div className="flex gap-x-3">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="w-full p-[12px] bg-richblack-800 rounded-sm text-richblack-5 border"
              required
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={changeHandler}
              value={formData.firstName}
            />
          </label>
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              LastName <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              className="w-full p-[12px] bg-richblack-800 rounded-sm text-richblack-5 border"
              placeholder="Last Name"
              name="lastName"
              type="text"
              onChange={changeHandler}
              value={formData.lastName}
            />
          </label>
        </div>
        <div>
          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Email Address <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="w-full p-[12px] bg-richblack-800 rounded-sm text-richblack-5 border"
              required
              placeholder="Email Address"
              name="email"
              onChange={changeHandler}
              value={formData.email}
            />
          </label>
        </div>
        <div className="flex gap-x-3">
          <label className="relative w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              className="w-full p-[12px] bg-richblack-800 rounded-sm text-richblack-5 border"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              onChange={changeHandler}
              value={formData.password}
            />
            <span
              className="absolute right-4 top-[38px]"
              onClick={() => setShowPassword((prevData) => !prevData)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fill="white" fontSize={24} />
              ) : (
                <AiOutlineEye fontSize={24} fill="white" />
              )}
            </span>
          </label>
          <label className="relative w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              className="w-full p-[12px] bg-richblack-800 rounded-sm text-richblack-5 border"
              type={confirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={changeHandler}
              value={formData.confirmPassword}
            />
            <span
              className="absolute right-4 top-[38px]"
              onClick={() => setConfirmPassword((prevData) => !prevData)}
            >
              {confirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="white" />
              ) : (
                <AiOutlineEye fontSize={24} fill="white" />
              )}
            </span>
          </label>
        </div>
        <button className="border border-richblack-700 p-2 bg-yellow-50 rounded-md">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
