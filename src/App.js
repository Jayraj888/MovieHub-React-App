import "./App.css";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
import Home from "./components/Home";

function App() {
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("light");

  //Dark / Light mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
        <LoadingBar color="#f11946" progress={progress} />
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          {/* For Home */}
          <Route exact path="/" element={<Home setProgress={setProgress} />} />

          {/* For About */}
          <Route
            exact
            path="/about"
            element={<About category="about" setProgress={setProgress} />}
          />

          {/* For Categories */}
          <Route
            exact
            path="/popular"
            element={
              <Movie
                mode={mode}
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
                mode={mode}
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
                mode={mode}
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
                mode={mode}
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

//1. Would you like me to show you how to add the Circular Rating % Badge to the corner of these posters now that they are lined up correctly?
