import '../contents.css';
import "./Home.css";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container container">
      <div className="home-title">
        <h1>My Playlists</h1>
        <Link to="/create">Create Playlist</Link>
      </div>
      <div className="contents">
        <PlaylistCard />
      </div>
    </div>
  );
}

function PlaylistCard() {
  const [playlists, setPlaylists] = useState([]);

  const fetchPlaylists = async () => {
    try {
      const response = await fetch('https://6713c2f7690bf212c75faacf.mockapi.io/playlist');
      if (!response.ok) {
        throw new Error('네트워크 응답이 좋지 않습니다.');
      }
      const data = await response.json();
      setPlaylists(data);
    } catch (error) {
      console.error('데이터를 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  return (
    <div className="card-container d-flex flex-wrap justify-content-center">
      {playlists.map((playlist) => (
        <div className="card" style={{ width: "15rem", margin: "10px" }} key={playlist.id}>
          <div style={{ backgroundColor: playlist.color, height: "150px" }}>
          </div>
          <div className="card-body">
            <h5 className="card-title">{playlist.title}</h5>
            <p className="card-text">{playlist.description}</p>
            <a href={playlist.url} className="btn btn-primary">View Playlist</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
