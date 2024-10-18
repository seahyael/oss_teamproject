import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

function Layout() {
  return (
    <>
      <Header />
      {/* <SideBar /> */}
      <Outlet />
    </>
  );
}

export default Layout;
