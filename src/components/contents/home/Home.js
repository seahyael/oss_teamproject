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
          <PlaylistCard />
        </div>
        <div className="item">
          <PlaylistCard />
        </div>
        <div className="item">
          <PlaylistCard />
        </div>
        <div className="item">
          <PlaylistCard />
        </div>
        <div className="item">
          <PlaylistCard />
        </div>
      </div>
    </div>
  );
}

function PlaylistCard(props) {
  return (
    <div className="card" style={{ width: "15rem" }}>
      <img
        src="https://media.istockphoto.com/id/1470710940/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0%EC%83%89-%EB%B0%94%ED%83%95%EC%97%90-%EC%95%84%EB%A6%84-%EB%8B%A4%EC%9A%B4-%EC%96%BC%EB%A3%A9-%EA%B3%A0%EC%96%91%EC%9D%B4.jpg?s=2048x2048&w=is&k=20&c=k3JOZES3LF1zP5K-krGgJ0hw4fduWhhl4DV6-4ddjCg="
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="http://localhost:3000/home" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Home;
