import "./Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-color header">
        {/* maybe give a cool name to the website? */}
        <h1>Playlist Website</h1>
        <div>
          <input type="text" placeholder="검색" />
          <button id="search">검색</button>
          <a href="./Home.js" className="noline">
            | Home
          </a>
        </div>
      </div>
    </div>
  );
}
