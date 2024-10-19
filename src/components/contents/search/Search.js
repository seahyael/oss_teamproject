import "./Search.css";

import { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [query, setQuery] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [songData, setSongData] = useState([]);
  // const songData = useRef([]);

  const handleButtonClick = () => {
    const updatedQuery = document.getElementById("search-input").value;
    setQuery(updatedQuery);
  };
  // const displayResult = (result) => {};

  //! useEffect Hook is called twice, due to React's strict mode
  //! It will be called just once in actual deployment 

  // fetch access token, only once
  useEffect(() => {
    // get access token
    async function getAccessToken() {
      try {
        const clientId = "764c55ba2e664834901a77513ee360cb"; // 발급받은 클라이언트 ID
        const clientSecret = "978bf532654943deb23f21128e905c46"; // 발급받은 클라이언트 Secret
        const credentials = btoa(`${clientId}:${clientSecret}`);

        const response = await fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: {
            Authorization: `Basic ${credentials}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: "grant_type=client_credentials",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setAccessToken(data.access_token);
      } catch (error) {
        console.error(error);
      }
    }

    getAccessToken();
  }, []);

  // render when query has changed
  useEffect(() => {
    const fetchSongData = async () => {
      let response;
      try {
        response = await axios.get("https://api.spotify.com/v1/search", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            q: query,
            type: "track",
            limit: 10,
          },
        });
      } catch (error) {
        console.error(error);
      }

      // Data fetched, Do something with it
      //* for debugging
      console.log(response.data.tracks.items);
      // the return value of async function is always a Promise Object
      // songData.current = response.data.tracks.items;
      setSongData(response.data.tracks.items);
      //* for debugging


    };

    if (query)
      fetchSongData();
  }, [query, accessToken]);

  const createTableRow = (data) => {
    const imageUrl = data.album.images[2].url;
    return (
      <tr>
        <td><img src={imageUrl} alt="album-cover" /></td>
        <td>{data.name}</td>
        <td>{data.artists[0].name}</td>
        <td>{data.album.name}</td>
        <td>{data.popularity} out of 100</td>
        <td>{data.album.release_date}</td>
        <td><a href={data.external_urls.spotify}>Link</a></td>
      </tr>
    )
  }
  
  return (
    <div className="search-container">
      <div className="search-header">
        <h1>This is search tab</h1>
        <p>Search your desired song here!</p>

        <div className="search-bar">
          <div className="input-group mb-3">
            <input
              id="search-input"
              type="text"
              className="form-control"
              placeholder="title of the song"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={handleButtonClick}
            >
              Button
            </button>
          </div>
        </div>
      </div>

      <div className="search-result">
        <h3>Search Result</h3>
        <h5>(Display Search Result here)</h5>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Artist</th>
              <th scope="col">Album</th>
              <th scope="col">Popularity</th>
              <th scope="col">ReleaseDate</th>
              <th scope="col">URL link</th>
            </tr>
          </thead>
          <tbody>
           {songData ? songData.map((item) => { return createTableRow(item) }):<tr></tr>}  
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Search;
