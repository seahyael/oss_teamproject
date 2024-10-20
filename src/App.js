// default style
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// import components here
import Layout from "./components/layouts/Layout";
import Home from "./components/contents/home/Home";
import Search from "./components/contents/search/Search";
import CreatePlaylist from "./components/contents/createplaylist/CreatePlaylist";
import AddToPlaylist from "./components/contents/addtoplaylist/AddToPlaylist";
import ViewPlaylist from "./components/contents/viewplaylist/ViewPlaylist";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="create" element={<CreatePlaylist />} />
            <Route path="add" element={<AddToPlaylist />} />
            <Route path="read" element={<ViewPlaylist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
