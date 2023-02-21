import { Navigate, Route, Router } from "react-router-dom";
import { useState } from "react";

export default function LandingPage() {
  return (
    <div>
      <div className="navbar border-b border-zinc-300  min-h-0 p-1 ">
        <div className="navbar-start  ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li tabIndex={0}>
                <a className="justify-between">
                  Funcionalidades
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Calculadora Dividendos</a>
                  </li>
                  <li>
                    <a>Juros Compostos</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost btn-sm normal-case text-xl px-0 py-0">
            CalculatorApp
          </a>
        </div>
        <div className=" btn-sm navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <a>
                Funcionalidades
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Calculadora Rendimento</a>
                </li>
                <li>
                  <a>Juros Compostos</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="navbar-start flex justify-end px-2 gap-1">
          <button
            className=" 
          btn btn-ghost btn-sm line  outline-none  text-sm normal-case"
          >
            Login
          </button>
          <a className="btn btn-primary btn-sm text-white normal-case  ">
            Comece Já
          </a>
        </div>
      </div>
    </div>
  );
}
