import './App.css';

// import components here
import Header from './components/header';
import Home from './Home';

import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path='/home' element={<Home />} />

          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
