// import css file (important)
import "./Layout.css";

import { Outlet } from "react-router-dom";

// import components here
import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";
import Footer from "./footer/Footer";

function Layout() {
  return (
    <div className="layout-container">
      <Header />
      <SideBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
