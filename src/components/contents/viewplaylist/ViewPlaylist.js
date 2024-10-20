import "../contents.css";
import "./ViewPlaylist.css";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

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
        <h1>Info of the playlist</h1>
      </div>

      <div className="r-description">
        <div>
          <div>
            <span>Title:</span>
            <span>transmit</span>
          </div>
          <div>
            <span>Description:</span>
            <span>
              Maiores aut officia exercitationem non at accusantium doloremque.
              Corrupti cum beatae voluptatibus necessitatibus tempora provident
              laboriosam. Omnis pariatur natus voluptatem pariatur alias earum.
              Eveniet voluptates amet maiores possimus tempora perspiciatis quod
              eos. Quisquam laboriosam repellat alias excepturi totam
              exercitationem fugit. Voluptates accusantium vel culpa culpa
              aspernatur repellat eum eius dicta.
            </span>
          </div>
          <div>
            <span>Color:</span>
            <span>#ad77de</span>
          </div>
          <div>
            <span>Mood:</span>
            <span>Niue</span>
          </div>
          <div>
            <span>Genre:</span>
            <span>Non Music</span>
          </div>
          <div>
            <span>Favorite:</span>
            <span>true</span>
          </div>
          <div>
            <span>Public:</span>
            <span>false</span>
          </div>
          <div>
            <span>Songs:</span>
            <span>none</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPlaylist;
