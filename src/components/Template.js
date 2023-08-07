import React from "react";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import frameImage from "../assets/frame.png";
import { FcGoogle } from "react-icons/fc";
function Template({
  title,
  description1,
  description2,
  image,
  formType,
  setIsLoggedIn,
}) {
  return (
    <div className="w-11/12 max-w-[1150px] mx-auto flex justify-between mt-8">
      <div className="w-11/12 max-w-[450px]">
        <div>
          <h1 className="text-richblack-100 font-semibold text-2xl">{title}</h1>
        </div>
        <div>
          <p className="text-richblack-100 ">{description1}</p>
          <p className="text-blue-400 text-sm">{description2}</p>
        </div>
        <div>
          {formType === "signup" ? (
            <SignupForm setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </div>
        <div className="flex items-center mt-2">
          <div className="h-[1px] bg-richblack-200 w-[50%]"></div>
          <p className="px-2 text-richblack-100">OR</p>
          <div className="h-[1px] bg-richblack-200 w-[50%]"></div>
        </div>

        <button className="border border-richblack-5 w-full py-2 px-2 rounded-md flex items-center gap-x-3 justify-center mt-4">
          <FcGoogle fontSize={32} />{" "}
          <p className="text-white">Sign Up with Google</p>
        </button>
      </div>

      <div className="relative">
        <img
          src={frameImage}
          alt="frame"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          className="absolute -top-2 right-4"
          src={image}
          alt="studynotion"
          width={558}
          height={490}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Template;
