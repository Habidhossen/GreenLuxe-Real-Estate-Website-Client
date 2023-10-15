import { auth } from "@/config/firebase.init";
import { setUser } from "@/redux/features/auth/userSlice";
import { getAuth, signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  // declare state for handling navigation bar
  const [state, setState] = useState(false);

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // handle SignOut button
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(setUser(null));
    });
  };

  // get current User from firebase
  const currentUser = getAuth().currentUser;
  const photoURL = currentUser?.photoURL;

  return (
    <nav className="bg-white backdrop-blur-md bg-opacity-60 fixed top-0 left-0 right-0 z-10 text-sm">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <h1 className="text-2xl font-bold text-heading">
              <span className="text-primary">Green</span>Luxe.
            </h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 text-sm text-heading font-semibold">
            <li className="text-gray-700 hover:text-primary">
              <Link href="/properties" className="block">
                Listing
              </Link>
            </li>
            <li className="text-gray-700 hover:text-primary">
              <Link href="/contact" className="block">
                Contact Us
              </Link>
            </li>
            <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
            {user?.email && (
              <li className="text-gray-700 hover:text-primary">
                <Link href="/profile" className="block">
                  My Profile
                </Link>
              </li>
            )}
            <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
              {user?.email ? (
                <div>
                  <div className="flex items-center relative group gap-x-3">
                    <Image
                      src={
                        photoURL ||
                        "https://i.ibb.co/Y3cQrGL/dummy-profile-image.jpg"
                      }
                      className="w-10 h-10 rounded-full"
                      alt="User Profile"
                      width="100"
                      height="100"
                    />
                    <div>
                      <span className="block text-gray-700 text-sm font-medium">
                        {currentUser?.displayName}
                      </span>
                      <span className="block text-gray-700 text-xs">
                        {currentUser?.email}
                      </span>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="px-2.5 py-2.5 text-red-600 duration-150 bg-red-50 rounded-lg hover:bg-red-100 active:bg-red-200"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <li>
                    <Link
                      href="/login"
                      className="block py-3 text-center text-gray-700 hover:text-primary border rounded-lg md:border-none"
                    >
                      Log in
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/signup"
                      className="block py-3 px-4 font-medium text-center text-white bg-[#16a571] hover:bg-green-600 active:bg-bg-green-700 active:shadow-none rounded-lg shadow md:inline"
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
