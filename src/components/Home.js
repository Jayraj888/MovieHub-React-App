import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  useEffect(() => {
    props.setProgress(10);
    setTimeout(() => {
      props.setProgress(100);
    }, 500);
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="home-container"
      style={{ width: "100%", marginTop: "3.5rem" }}
    >
      {/* 1. Hero Section - The "Welcome" UI */}
      <div
        className="hero-section"
        style={{
          height: "360px",
          width: "100%",
          background:
            "linear-gradient(to right, rgba(3, 37, 65, 0.9) 0%, rgba(1, 180, 228, 0.7) 100%), url('https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/62YkUgY7Z796Sui96S0v971vY0O.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 8%",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            marginBottom: "0",
            letterSpacing: "-1px",
          }}
        >
          Welcome.
        </h1>
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: "600",
            marginBottom: "35px",
          }}
        >
          Millions of movies and people to discover.{" "}
          <span style={{ color: "#90cea1" }}>Explore now.</span>
        </h2>

        {/* Professional Search Bar */}
        <div
          style={{ position: "relative", width: "100%", maxWidth: "1100px" }}
        >
          <input
            type="text"
            placeholder="Search for a movie, tv show, person......"
            style={{
              width: "100%",
              height: "46px",
              padding: "10px 25px",
              borderRadius: "30px",
              border: "none",
              fontSize: "1.1rem",
              outline: "none",
            }}
          />
          <Link
            to="/popular"
            className="d-flex align-items-center justify-content-center"
            style={{
              position: "absolute",
              right: "-1px",
              top: "0",
              height: "46px",
              padding: "0 35px",
              borderRadius: "30px",
              background: "linear-gradient(to right, #1ed5a9, #01b4e4)",
              border: "none",
              color: "white",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            Search
          </Link>
        </div>
      </div>

      {/* 2. Featured Category Cards - The "Decent" look */}
      <div className="container mt-5 mb-5">
        <h3 className="fw-bold mb-4" style={{ color: "rgb(3, 37, 65)" }}>
          What's Popular
        </h3>

        <div className="row row-cols-1 row-cols-md-4 g-4">
          {/* Card 1: Popular */}
          <div className="col">
            <Link to="/popular" style={{ textDecoration: "none" }}>
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "0.3s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "translateY(-10px)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <img
                  src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=500&q=60"
                  className="card-img-top"
                  alt="Popular"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body text-center bg-white">
                  <h5 className="card-title fw-bold text-dark mb-0">
                    Browse Popular
                  </h5>
                </div>
              </div>
            </Link>
          </div>

          {/* Card 2: Top Rated */}
          <div className="col">
            <Link to="/top_rated" style={{ textDecoration: "none" }}>
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "0.3s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "translateY(-10px)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <img
                  src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=500&q=60"
                  className="card-img-top"
                  alt="Top Rated"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body text-center bg-white">
                  <h5 className="card-title fw-bold text-dark mb-0">
                    Top Rated
                  </h5>
                </div>
              </div>
            </Link>
          </div>

          {/* Card 3: Upcoming */}
          <div className="col">
            <Link to="/upcoming" style={{ textDecoration: "none" }}>
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "0.3s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "translateY(-10px)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <img
                  src="https://images.unsplash.com/photo-1594908900066-3f47337549d8?auto=format&fit=crop&w=500&q=60"
                  className="card-img-top"
                  alt="Upcoming"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body text-center bg-white">
                  <h5 className="card-title fw-bold text-dark mb-0">
                    Upcoming
                  </h5>
                </div>
              </div>
            </Link>
          </div>

          {/* Card 4: Now Playing */}
          <div className="col">
            <Link to="/now_playing" style={{ textDecoration: "none" }}>
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "0.3s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "translateY(-10px)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <img
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=500&q=60"
                  className="card-img-top"
                  alt="Now Playing"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body text-center bg-white">
                  <h5 className="card-title fw-bold text-dark mb-0">
                    In Theaters
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* 3. The Professional Footer - Added inside Home for a complete look */}
      <footer
        style={{
          backgroundColor: "#032541",
          color: "white",
          padding: "60px 0",
          marginTop: "80px",
        }}
      >
        <div className="container">
          <div className="row justify-content-center text-center text-md-start">
            <div className="col-md-3 mb-4">
              <h2
                className="fw-bold"
                style={{
                  background: "linear-gradient(to right, #01b4e4, #90cea1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                MovieHub
              </h2>
              <button
                className="btn btn-light fw-bold mt-3"
                style={{ color: "#01b4e4" }}
              >
                HI, NEW USER!
              </button>
            </div>
            <div className="col-md-2 mb-4">
              <h6 className="text-uppercase fw-bold">The Basics</h6>
              <ul className="list-unstyled opacity-75">
                <li>About MovieHub</li>
                <li>Contact Us</li>
                <li>Support</li>
              </ul>
            </div>
            <div className="col-md-2 mb-4">
              <h6 className="text-uppercase fw-bold">Community</h6>
              <ul className="list-unstyled opacity-75">
                <li>Guidelines</li>
                <li>Discussions</li>
                <li>Leaderboard</li>
              </ul>
            </div>
            <div className="col-md-2 mb-4">
              <h6 className="text-uppercase fw-bold">Legal</h6>
              <ul className="list-unstyled opacity-75">
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>DMCA</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-5 pt-3 border-top border-secondary opacity-50">
            <p>© 2026 MovieHub. Developed by Tej Raj. Data from TMDb.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
