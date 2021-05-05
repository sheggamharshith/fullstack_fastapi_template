import {
  toggleSidebar,
  useLayoutDispatch,
  useLayoutState,
} from "../../context/LayoutContext";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const sideBarLink = [
  {
    path: "/app/databasetables",
    name: "databasetable",
  },
  {
    path: "/app/main",
    name: "main",
  },
];

const SideBar = () => {
  const { isSidebarOpened } = useLayoutState();
  const layOutDispatch = useLayoutDispatch();

  return (
    <>
      <Transition
        as={Fragment}
        show={isSidebarOpened}
        enter="transform transition duration-500"
        enterFrom="-translate-x-96"
        enterTo="opacity-100 rotate-0 scale-100 "
        leave="transform duration-500 transition  "
        leaveFrom="opacity-100  "
        leaveTo="opacity-0 -translate-x-96 "
      >
        <aside
          className={
            "fixed flex flex-col h-full w-60 border border-rose-400 p-2  text-black slide z-50 bg-white"
          }
        >
          <div className="text-3xl text-center border-b-4"> Full Stack </div>
          <div className="flex flex-col gap-4  h-full items-center justify-center w-full ">
            {sideBarLink.map((link, i) => (
              <Link
                key={i}
                onClick={() => {
                  toggleSidebar(layOutDispatch);
                }}
                className="border-b p-2 w-full"
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </aside>
      </Transition>

      <div
        onClick={() => {
          toggleSidebar(layOutDispatch);
        }}
        className={
          "absolute w-full h-full bg-black bg-opacity-40 z-40" +
          (isSidebarOpened ? "" : " hidden")
        }
      >
        {" "}
      </div>
    </>
  );
};

export default SideBar;
