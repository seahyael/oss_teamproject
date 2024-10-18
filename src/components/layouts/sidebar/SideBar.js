import "./SideBar.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar-container">
      <div className="sidenav">
        <Link to="/home">Home</Link>
        <Link to="/search">Search</Link>
        <a href="localhost:3000">Tutorial</a>
        <a href="localhost:3000">Contact</a>
        <a href="localhost:3000">About</a>
      </div>
    </div>
  );
}

export default SideBar;
