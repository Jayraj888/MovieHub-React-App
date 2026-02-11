import "./App.css";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <Router>
        <LoadingBar color="#f11946" progress={progress} />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/about"
            element={<About category="about" setProgress={setProgress} />}
          />
          <Route
            exact
            path="/popular"
            element={
              <Movie
                key="popular"
                country="in"
                category="popular"
                setProgress={setProgress}
              />
            }
          />

          <Route
            exact
            path="/top_rated"
            element={
              <Movie
                key="top_rated"
                country="in"
                category="top_rated"
                setProgress={setProgress}
              />
            }
          />

          <Route
            exact
            path="/upcoming"
            element={
              <Movie
                key="upcoming"
                country="in"
                category="upcoming"
                setProgress={setProgress}
              />
            }
          />

          <Route
            exact
            path="/now_playing"
            element={
              <Movie
                key="now_playing"
                country="in"
                category="now_playing"
                setProgress={setProgress}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
