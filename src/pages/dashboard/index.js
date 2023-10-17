import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import { auth } from "@/config/firebase.init";
import { setLoading, setUser } from "@/redux/features/auth/userSlice";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const DashboardPage = ({ children }) => {
  const router = useRouter();

  /* Handle Firebase State */
  // dispatch
  const dispatch = useDispatch();
  // selector
  const { user } = useSelector((state) => state.user);

  // handle Firebase Auth State
  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  // navigation items
  const navigation = [
    {
      href: "/dashboard",
      name: "Overview",
    },
    {
      href: "/dashboard/profile",
      name: "My Profile",
    },
    {
      href: "/dashboard/booking",
      name: "Bookings",
    },
  ];

  // get current User from firebase
  const currentUser = getAuth().currentUser;
  const photoURL = currentUser?.photoURL;

  // handle SignOut button
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(setUser(null));
      router.push("/");
    });
  };

  const navFooter = [
    {
      href: "",
      name: "Logout",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
          />
        </svg>
      ),
    },
  ];
  return (
    <PrivateRoute>
      <div>
        <div className="drawer lg:drawer-open">
          <input
            id="dashboardDrawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content flex flex-col p-6 md:p-8 lg:p-10">
            {/* Page content here */}
            {/* dashboard nav */}
            <nav className="bg-white md:hidden lg:hidden py-3 px-6 fixed top-0 left-0 right-0 shadow-sm flex items-center justify-between">
              <h1 className="text-lg font-semibold">Dashboard</h1>
              <label
                htmlFor="dashboardDrawer"
                className="btn btn-[#FFA920] drawer-button lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </svg>
              </label>
            </nav>

            {/* main content */}
            <main className="pt-16 md:pt-0 lg:pt-0">
              {/* Breadcrumb */}
              <nav className="text-sm mb-4">
                <ol className="list-reset flex text-grey">
                  <li className="mr-2">
                    <Link
                      href="/"
                      className="text-heading font-semibold hover:underline"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mr-2">
                    <span>&gt;</span>
                  </li>
                  <li className="text-transparent bg-gradient-to-r from-[#ff7d1e] to-primary bg-clip-text font-semibold">
                    Dashboard
                  </li>
                </ol>
              </nav>
              {/* children are here */}
              {children}
            </main>
          </div>

          <div className="drawer-side">
            <label
              htmlFor="dashboardDrawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Customize Sidebar */}
              <>
                <nav className="fixed top-0 left-0 w-full h-full border-r bg-white space-y-8 sm:w-80">
                  <div class="flex flex-col h-full">
                    <div className="h-20 flex items-center px-6">
                      {" "}
                      <Link href="/">
                        <h1 className="text-xl font-bold text-heading">
                          <span className="text-primary">Green</span>Luxe.
                        </h1>
                      </Link>
                    </div>

                    <div className="flex-1 flex flex-col h-full overflow-auto border-t pt-2">
                      <ul className="px-4 text-sm font-medium flex-1">
                        {navigation.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              href={item.href}
                              className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-yellow-50 active:bg-yellow-100 duration-150"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div>
                        <ul className="px-4 pb-4 text-sm font-medium">
                          <li>
                            <button
                              onClick={handleSignOut}
                              className="flex items-center gap-x-2 text-red-600 p-2 rounded-lg  hover:bg-red-50 active:bg-red-100 duration-150"
                            >
                              <div className="text-red-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                                  />
                                </svg>
                              </div>
                              Logout
                            </button>
                          </li>
                        </ul>
                        <div className="py-4 px-4 border-t">
                          <div className="flex items-center gap-x-4">
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
                              <span className="block text-gray-700 text-sm font-semibold">
                                {currentUser?.displayName}
                              </span>
                              <p className="block mt-px text-gray-600 text-xs">
                                {currentUser?.email}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </>
            </ul>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default DashboardPage;
