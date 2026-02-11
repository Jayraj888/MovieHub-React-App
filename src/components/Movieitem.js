import React from "react";

const Movieitem = (props) => {
  let { title, overview, backdrop_path, movieId, date } = props;
  const directImgUrl = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;
  const directMovieUrl = `https://www.themoviedb.org/movie/${movieId}`;

  const formatDate = (dateString) => {
    if (!dateString) return "Release Date TBD";

    const options = { year: "numeric", month: "short", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("en-Us", options);
  };

  return (
    <div className="my-3">
      <div className="card">
        <img src={directImgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{overview}...</p>
          <p class="card-text">
            <small class="text-body-secondary">{formatDate(date)}</small>
          </p>{" "}
          <a
            rel="noreferrer"
            href={directMovieUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Movieitem;
