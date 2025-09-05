import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/SideBar";

export default function Layout() {
  const location = useLocation();
  const hideSidebar = location.pathname.startsWith("/meal/");

  if (hideSidebar) {
    // No sidebar → don't wrap in flex
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Outlet />
      </div>
    );
  }
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Sidebar />
      <Outlet />
    </div>
  );
}
