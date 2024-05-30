import React, { useState } from "react";
import login from "../../assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { auth } from "../../FirebaseAuth/FirebaseAuth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const SignUp = () => {
  const navigateLogin = useNavigate();

  const [userSignUp, setUserSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserSignUp({ ...userSignUp, [e.target.name]: e.target.value });
    // console.log(userSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userSignUp.username || !userSignUp.email || !userSignUp.password) {
      return toast.error("All fields are required");
    } else {
      // send data to the backend here
      createUserWithEmailAndPassword(
        auth,
        userSignUp.email,
        userSignUp.password
      )
        .then(async (res) => {
          const user = res.user;
          await updateProfile(user, {
            displayName: userSignUp.username,
          });

          navigateLogin("/login")
        })
        .catch((error) => {
          toast.error(`${error.message}`);
        });
    }
  };

  return (
    <>
      <div className="relative">
        <img
          src={login}
          alt=""
          className="w-full object-cover object-center h-[200px] "
        />
        <div className="w-full h-[200px] bg-black absolute  top-0 left-0 opacity-[.4]"></div>
        <h2 className=" absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl ">
          SignUp
        </h2>
      </div>

      {/* SignUp form */}
      <div className="container px-5 py-24 mx-auto flex">
        <div className="mx-auto bg-red-500 rounded-lg p-8 flex flex-col mt-8 md:mt-0 shadow-md text-white w-[500px]">
          <h2 className="text-white text-4xl mb-4 font-medium title-font">
            SignUp
          </h2>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-white">Name</label>
            <input
              autoComplete="off"
              type="name"
              id="name"
              name="username"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={userSignUp.username}
              onChange={handleChange}
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-white">Email</label>
            <input
              autoComplete="off"
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={userSignUp.email}
              onChange={handleChange}
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-white">Password</label>
            <input
              autoComplete="off"
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={userSignUp.password}
              onChange={handleChange}
            />
          </div>
          <button
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={handleSubmit}
          >
            SignUp
          </button>
          <p className=" text-white mt-3">
            Do you have an account?{" "}
            <Link to="/login">
              <button className="cursor-pointer hover:text-blue-400 underline font-semibold text-">
                Login
              </button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
