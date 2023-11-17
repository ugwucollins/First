import React from "react";

const Movie = ({movie}: any) => {

  return (
    <div className="movie-card">

      <div className="movie-card-card">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300"
          }
          alt={movie.Type}
        />
        <h2 className="h">{movie.Type}</h2>
        <h3 className="h">{movie.Title}</h3>
        <p className="h">{movie.Year}</p>
      </div>
    </div>
  )
}

export default Movie;
