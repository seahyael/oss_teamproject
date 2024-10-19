import "./Header.css";

// maybe get rid after, but add logo to header
import logo from "../../../logo1.jpg";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-color header">
        {/* maybe give a cool name to the website? */}
        <div className="title-div">
          <img src={logo} className="header-logo" alt="logo" />
          <h1 id="title">Playlist Website</h1>
        </div>
        <div className="title-search">
          {/* <input type="text" placeholder="검색" />
          <button id="search">검색</button> */}
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Playlist"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
           Search 
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
