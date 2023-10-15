import Link from "next/link";
import { useRouter } from "next/router";
import ProfilePage from "./profile";

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <main>
            {" "}
            {router.pathname === "/dashboard/profile" ? <ProfilePage /> : null}
          </main>

          <label
            htmlFor="dashboardDrawer"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="dashboardDrawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}

            <li className="text-heading font-semibold">
              <Link href="dashboard/profile" className="block">
                My Profile
              </Link>
            </li>
            <li className="text-heading font-semibold">
              <Link href="contact" className="block">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
