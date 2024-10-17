import "./header.css";
import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div className="background skyblue">
      <div className="nav_items">
        <h1>플레이리스트 사이트</h1>
        <div>
          <input type="text" placeholder="검색" />
          <button id="search">검색</button>
          <a href="./Home.js" class="noline skyblue">
            {" "}
            | Home
          </a>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
