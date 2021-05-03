import React from "react";
import DropDownHeader from "../HeaderDropeDown";
import { useHistory } from "react-router-dom"
import { useUserDispatch } from "../../context/UserContext";


export default function Header() {
  const history = useHistory()
  const userDispatch = useUserDispatch()
  return (
    <>
      <div className="w-full  ">
        <nav className="relative flex flex-wrap items-center justify-center px-2 py-3 bg-pmaterial shadow-xl">
          <div className=" flex w-full font-bold text-white items-center justify-between  ">
            <div>Full Stack Project Template</div>
            <DropDownHeader history={history} userDispatch = {userDispatch} />
          </div>
        </nav>
      </div>
    </>
  );
}
