import React, { useEffect, useState } from "react";
import Movieitem from "./Movieitem";
import Loader from "./Loader";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const Movie = (props) => {
  //Usestate hooks
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    // setPage(1) //setpage 1 when category changes
    updateMovies();
    document.title = `MovieHub - ${capitalizerFirstLetter(props.category)}`;
    // eslint-disable-next-line
  }, [page]);

  const updateMovies = async () => {
    props.setProgress(10);
    setLoading(true);
    const url = `https://api.themoviedb.org/3/movie/${props.category}?api_key=11dfdce9071793140fc7c3dbf517dac2&page=${page}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(50);
    console.log(parsedData);

    setTotalPages(parsedData.total_pages);
    setResults(parsedData.results);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  const capitalizerFirstLetter = (string) => {
    if (!string) {
      return "";
    }
    //replace _
    let formattedString = string.replace("_", " ");
    return formattedString.charAt(0).toUpperCase() + formattedString.slice(1);
  };

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://api.themoviedb.org/3/movie/${props.category}?api_key=11dfdce9071793140fc7c3dbf517dac2&page=${page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    setTotalPages(parsedData.total_pages);
    setResults(results.concat(parsedData.results));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "35px 0px" }}>
        MovieHub - {capitalizerFirstLetter(props.category)}
      </h1>
      {
        <InfiniteScroll
          dataLength={results.length}
          next={fetchMoreData}
          hasMore={results.length !== totalResults}
          loader={<Loader />}
          style={{ overflow: "hidden" }}
        >
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
              {results.map((element) => {
                return (
                  <div className="col" key={element.id}>
                    <Movieitem
                      // key={element.id} for full info
                      title={element.title}
                      overview={element.overview.slice(0, 88)}
                      // backdrop_path={element.backdrop_path} //for horizontal
                      poster_path={element.poster_path} //for vertical
                      movieId={element.id}
                      date={element.release_date}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      }
    </>
  );
};

Movie.defaultProps = {
  country: "in",
  category: "popular",
};
Movie.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};

export default Movie;
