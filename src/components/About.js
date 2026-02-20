import React, { useEffect } from "react";

const About = (props) => {
  useEffect(() => {
    props.setProgress(10);
    setTimeout(() => {
      props.setProgress(100);
    }, 500);
    // eslint-disable-next-line
  }, []);

  const tealGradient = "linear-gradient(to right, #01b4e4, #90cea1)";
  const cardBg = props.mode === "dark" ? "rgba(255,255,255,0.05)" : "#ffffff";
  const textColor = props.mode === "dark" ? "white" : "#032541";

  return (
    <div style={{ color: textColor }}>
      <div className="container" style={{ marginTop: "7rem" }}>
        {/* SECTION 1: HERO */}
        <div className="text-center mb-5">
          <h1
            className="display-2 fw-bolder mb-3"
            style={{
              background: tealGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-2px",
            }}
          >
            MovieHub
          </h1>
          <p className="fs-5 opacity-75 mx-auto" style={{ maxWidth: "700px" }}>
            The next generation of movie exploration. Designed for speed,
            beauty, and the ultimate cinephile experience.
          </p>
        </div>

        {/* SECTION 2: THE EXPERIENCE */}
        <div className="row align-items-center g-5 py-5">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">A Cinematic Journey</h2>
            <p className="lead opacity-75" style={{ lineHeight: "1.8" }}>
              MovieHub provides a seamless way to discover trending titles
              across the globe. We believe that finding your next favorite movie
              should be as enjoyable as watching it.
            </p>
            <div
              className="mt-4 p-4 rounded-4 shadow-sm"
              style={{ background: cardBg, borderLeft: "5px solid #01b4e4" }}
            >
              <p className="fst-italic mb-0">
                "Powered by TMDb, delivering real-time updates on millions of
                movies."
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="p-5 rounded-5 shadow-lg border"
              style={{
                background: cardBg,
                backdropFilter: "blur(10px)",
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              <h3 className="fw-bold mb-4">The Developer</h3>
              <p>
                Developed by <span className="fw-bold text-info">Sailesh</span>,
                a Computer Engineering student from Alibag, India. Passionate
                about building modern web architectures and premium user
                interfaces.
              </p>
              <div className="d-flex gap-2 mt-3">
                <span className="badge rounded-pill bg-info text-dark p-2 px-3">
                  React
                </span>
                <span className="badge rounded-pill bg-info text-dark p-2 px-3">
                  Bootstrap
                </span>
                <span className="badge rounded-pill bg-info text-dark p-2 px-3">
                  TMDb API
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: KEY FEATURES */}
        <div className="py-5">
          <h3 className="text-center fw-bold mb-5">Why Choose MovieHub?</h3>
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div
                className="p-4 h-100 rounded-4 shadow-sm border-0 card"
                style={{ background: cardBg }}
              >
                <div className="fs-1 mb-3">⚡</div>
                <h5 className="fw-bold">Lightning Fast</h5>
                <p className="small opacity-75">
                  Optimized with React state management for a snappy, lag-free
                  experience.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="p-4 h-100 rounded-4 shadow-sm border-0 card"
                style={{ background: cardBg }}
              >
                <div className="fs-1 mb-3">📱</div>
                <h5 className="fw-bold">Fully Responsive</h5>
                <p className="small opacity-75">
                  Browse your favorite movies on any device, from mobile phones
                  to 4K monitors.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="p-4 h-100 rounded-4 shadow-sm border-0 card"
                style={{ background: cardBg }}
              >
                <div className="fs-1 mb-3">✨</div>
                <h5 className="fw-bold">Modern Design</h5>
                <p className="small opacity-75">
                  A "decent" and professional UI inspired by industry leaders
                  like TMDB and Prime Video.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: MINI FOOTER */}
      <footer
        className="mt-5 py-4 border-top"
        style={{
          background:
            props.mode === "dark" ? "rgba(255,255,255,0.02)" : "#f8f9fa",
        }}
      >
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center opacity-75">
          <p className="mb-0 small">
            © 2026 MovieHub. Built by <span className="fw-bold">NEW USER</span>.
          </p>
          <p className="mb-0 small">Data provided by The Movie Database API.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
