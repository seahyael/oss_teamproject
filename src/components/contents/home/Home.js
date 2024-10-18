import "./Home.css";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="home-title">
        <h1>My Playlists</h1>
        <Link to="/create">create playlist</Link>
      </div>
      <div className="contents">
        <div className="item">
          <h4>Test Album 1</h4>
        </div>
        <div className="item">
          <h4>Test Album 1</h4>
        </div>
        <div className="item">
          <h4>Test Album 1</h4>
        </div>
        <div className="item">
          <h4>Test Album 1</h4>
        </div>
        <div className="item">
          <h4>Test Album 1</h4>
        </div>
        <div className="item">
          <h4>Test Album 1</h4>
        </div>
        <div className="item">
          <h4>Test Album 1</h4>
        </div>
        <div className="item">
          <h4>Test Album 1</h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
