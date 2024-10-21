import "../contents.css";
import "./ViewPlaylist.css";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function ViewPlaylist() {
  const location = useLocation();
  const [playlistInfo, setPlaylistInfo] = useState(null);

  useEffect(() => {
    if (location.state && location.state.data) {
      setPlaylistInfo(location.state.data);
    }
  }, [location]);

  console.log(location);

  if (playlistInfo === null)
    return (
      <div className="r-container container">
        <h1>No information found...</h1>
      </div>
    );

  return (
    <div className="r-container">
      <div className="r-header" style={{ backgroundColor: playlistInfo.color }}>
        <h1>Info of the playlist: {playlistInfo.title}</h1>
      </div>

      <div className="r-description">
        <div>
          <div className="marg-bottom">
            <span>Description:</span>
            <span>
              {playlistInfo.description}
            </span>
          </div>
          <div className="marg-bottom">
            <span>Color:</span>
            <span>{playlistInfo.color}</span>
          </div>
          <div className="marg-bottom">
            <span>Mood:</span>
            <span>{playlistInfo.mood}</span>
          </div>
          <div className="marg-bottom">
            <span>Genre:</span>
            <span>{playlistInfo.genre}</span>
          </div>
          <div className="marg-bottom">
            <span>Favorite:</span>
            <span>{playlistInfo.favorite ? "true": "false"}</span>
          </div>
          <div className="marg-bottom">
            <span>Public:</span>
            <span>{playlistInfo.public ? "true": "false"}</span>
          </div>
          <div className="marg-bottom">
            <span>Songs:</span>
            <span>{/** create function that returns formatted song name lists */}</span>
          </div>
          <Link to={'/home'} className="btn btn-primary">Home</Link>
        </div>
      </div>
    </div>
  );
}

export default ViewPlaylist;
