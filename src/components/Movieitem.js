import React from "react";

const Movieitem = (props) => {
  let { title, poster_path, movieId, date } = props;

  const directImgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const directMovieUrl = `https://www.themoviedb.org/movie/${movieId}`;

  const formatDate = (dateString) => {
    if (!dateString) return "Release Date TBD";

    const options = { year: "numeric", month: "short", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("en-Us", options);
  };

  return (
    <div className="my-3">
      <div
        className="card h-100"
        style={{
          width: "200px",
          border: "none",
          backgroundColor: "transparent",
          borderRadius: "10px",
          overflow: "hidden",
          transition: "all 0.3s ease-in-out", // Smooth growth for the whole card
          cursor: "pointer",
          position: "relative", // Needed for zIndex to work
          zIndex: 1,
        }}
        // Hover img to grow card
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.zIndex = "10";
          e.currentTarget.style.boxShadow = "0px 10px 30px rgba(0,0,0,0.6)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.zIndex = "1";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* wrapping image */}
        <a href={directMovieUrl} target="_blank" rel="noreferrer">
          {/* Top Section card */}
          <div
            style={{
              height: "280px",
              overflow: "hidden",
              borderRadius: "10px 10px 0 0",
            }}
          >
            <img
              src={directImgUrl}
              className="card-img-top"
              alt={title}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Bottom section card */}
          <div
            className="card-body d-flex flex-column p-2 text-center"
            style={{ backgroundColor: "white", borderRadius: "0 0 10px 10px" }}
          >
            <h6
              className="card-title fw-bold text-truncate"
              title={title}
              style={{ color: "black", margin: 0 }}
            >
              {title}
            </h6>
            {/* mt-auto ensures the date stays at the absolute bottom of the card */}
            <p class="card-text mt-auto mb-0">
              <small class="text-body-secondary">{formatDate(date)}</small>
            </p>{" "}
          </div>
        </a>
      </div>
    </div>
  );
};

export default Movieitem;
