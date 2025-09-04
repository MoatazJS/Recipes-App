import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Sidebar />
      <Outlet />
    </div>
  );
}
