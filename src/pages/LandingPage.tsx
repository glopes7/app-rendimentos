import { Navigate, Outlet, Route, Router } from "react-router-dom";
import { useState } from "react";

export default function LandingPage() {
  const [goToCalculator, setGoToCalculator] = useState(false);

  if (goToCalculator) {
    return <Navigate to="/calculator" />;
  }

  return (
    <div>
      <div className="navbar border-b border-zinc-200  min-h-max p-1 ">
        <div className="navbar-start h-12">
          <a href="/" className="block">
            <img
              className=" h-auto w-40 ml-4 "
              src="/images/logo-header.png"
              alt="logo-header"
            />
          </a>

          <button
            onClick={() => {
              setGoToCalculator(true);
            }}
            className="btn-primary btn-xs text-[9px] btn text-white  flex ml-5 mb-[-6px] "
          >
            Calculadora
          </button>
        </div>

        <div className="navbar-start flex justify-end px-2 gap-1">
          <button
            className=" 
          btn btn-ghost btn-sm line  outline-none  text-sm normal-case"
          >
            Login
          </button>

          <div className="dropdown ">
            <button
              tabIndex={0}
              className="btn btn-primary btn-sm text-white normal-case  "
            >
              Comece Já
            </button>
            <div
              tabIndex={0}
              className="dropdown-content bg-white card card-compact shadow-md text-primary-content right-[1px] mt-1 w-96 p-0"
            >
              <div className="card-body">
                <div className="flex justify-center self-center  z-10">
                  <div className="p-4 bg-white mx-auto rounded-2xl    ">
                    <div className="mb-4">
                      <h3 className="font-semibold text-xl text-gray-800">
                        Sign In{" "}
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <div className="space-y-5">
                        <label className="text-sm font-medium text-gray-700 tracking-wide">
                          Email
                        </label>
                        <input
                          className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                          type=""
                          placeholder="mail@gmail.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                          Password
                        </label>
                        <input
                          className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                          type="password"
                          placeholder="Enter your password"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            id="remember_me"
                            name="remember_me"
                            type="checkbox"
                            className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                          />
                          <label
                            htmlFor="remember_me"
                            className="ml-2 block text-sm text-gray-800"
                          >
                            Remember me
                          </label>
                        </div>
                        <div className="text-sm">
                          <a
                            href="#"
                            className="text-green-400 hover:text-green-500"
                          >
                            Forgot your password?
                          </a>
                        </div>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                        >
                          Sign in
                        </button>
                      </div>
                    </div>
                    <div className="pt-5 text-center text-gray-400 text-xs">
                      <span>Copyright © 2021-2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
