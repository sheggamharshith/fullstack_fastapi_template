import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { LogoutIcon, UserIcon } from "@heroicons/react/solid";
import {signOut} from "../../context/UserContext"

export default function HeaderDropDown(props) {
  const {userDispatch , history} = props
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <div>
              <Menu.Button className=" p-1 text-sm font-medium text-black bg-gray-100 rounded-full  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <UserIcon
                  className="w-5 h-5  hover:text-violet-100 m-1"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? " bg-gray-100 text-black font-bold"
                            : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm gap-4`}
                       
                      >
                        <UserIcon className="w-5 h-5" />
                        Profile
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-gray-100 text-black font-bold"
                            : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm gap-4`}
                        onClick={() => {
                          signOut(userDispatch, history);
                        }}
                      >
                        <LogoutIcon className="w-5 h-5" />
                        Logout
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
