import "./Search.css";

function Search() {
  const searchSpotify = () => {
    // parse song name from input tag
    // make a get request to spotify api
  };

  return (
    <div className="search-container">
      <div className="search-header">
        <h1>This is search tab</h1>
        <p>Search your desired song here!</p>

        <div className="search-bar">
          <div className="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="title of the song"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Button
            </button>
          </div>
        </div>
      </div>

      <div className="search-result">
        <h3>Search Result</h3>
        <h5>(Display Search Result here)</h5>
      </div>
    </div>
  );
}

export default Search;
