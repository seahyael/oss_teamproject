import '../contents.css';
import "./AddToPlaylist.css";

import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function AddToPlaylist() {
  const location = useLocation();
  const [songInfo, setSongInfo] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.data) {
      setSongInfo(location.state.data);
    }
  }, [location]);

  //* for debugging
  //   console.log("Value of location object: ");
  //   console.log(location);
  //   console.log(location.state.data);
  //* for debugging

  const [playlistData, setPlaylistData] = useState([]);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await axios.get(
          "https://6713c2f7690bf212c75faacf.mockapi.io/playlist"
        );

        return response.data;
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlaylist().then((data) => {
      //* for debugging
      console.log(data);
      //* for debugging
      setPlaylistData(data);
    });
  }, []);

  const onClickAddSong = async (playlist) => {
    const id = playlist.id;
    const updatedPlaylist = {
      ...playlist,
      songs: [...playlist.songs, songInfo],
    };

    console.log(songInfo);

    if (songInfo === null || songInfo === undefined) {
      console.error("songInfo variable has abnormal value");
      return;
    }

    try {
      const response = await axios.put(
        `https://6713c2f7690bf212c75faacf.mockapi.io/playlist/${id}`,
        updatedPlaylist
      );
      console.log("Response:", response.data); // 생성된 리소스와 함께 반환된 데이터
    } catch (error) {
      console.error("Error posting data:", error);
    }
    navigate("/home");
  };

  const createTableRow = (data) => {
    return (
      <tr>
        <td></td>
        <td>{data.title}</td>
        <td>{data.description}</td>
        <td>
          <button
            onClick={() => {
              onClickAddSong(data);
            }}
          >
            This
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="a-container">
      <h1>Choose Your Playlist</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">description</th>
            <th scope="col">Choose</th>
          </tr>
        </thead>
        <tbody>
          {playlistData ? (
            playlistData.map((item) => {
              return createTableRow(item);
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AddToPlaylist;
