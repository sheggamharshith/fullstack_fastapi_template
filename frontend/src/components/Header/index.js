import React from "react";
import DropDownHeader from "../HeaderDropeDown";
import { useHistory } from "react-router-dom"
import { useUserDispatch } from "../../context/UserContext";
import {toggleSidebar , useLayoutDispatch } from "../../context/LayoutContext"


export default function Header() {
  const history = useHistory()
  const userDispatch = useUserDispatch()
  const toggleDispatch = useLayoutDispatch()


  return (
    <>
      <div className="w-full">
        <nav className="relative flex flex-wrap items-center justify-center px-2 py-3 bg-pblue shadow">
          <div className=" flex w-full font-bold text-white items-center justify-between">
            <div className="flex flex-row-reverse gap-4 ">
              <div>Full Stack Project Template</div>
              <button
                onClick={() => {
                  toggleSidebar(toggleDispatch);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <DropDownHeader history={history} userDispatch={userDispatch} />
          </div>
        </nav>
      </div>
    </>
  );
}
