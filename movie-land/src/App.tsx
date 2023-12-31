import React, { useEffect, useState } from "react";
import "./App.css";
// import axios from "axios";
import Movie from "./movie";

const API_URL = "http://www.omdbapi.com/?apikey=cc702cd7";

// const options = {
//   method: "GET",
//   url: "https://movies-api14.p.rapidapi.com/movie/27205",
//   headers: {
//     "X-RapidAPI-Key": "02e24f672dmshc7ccf007acdb654p12f93ajsnce5118ebc9e8",
//     "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
//   },
// };

const url = 'https://movies-api14.p.rapidapi.com/shows';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '02e24f672dmshc7ccf007acdb654p12f93ajsnce5118ebc9e8',
		'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
	}
};




function App() {
  const [movies, setmovies] = useState([]);
  const [search, setsearch] = useState("");
{   
  // const [home, sethome] = useState();

  // const moveMents = async (options: any) => {
  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.text();
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
    
  //   moveMents('action');
  // }, []);
}

  const movie = {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
    Title: "Italian Spiderman",
    Type: "movie",
    Year: "2007",
    imdbID: "tt2705436",
  };

  const searchMovies = async (title: any) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setmovies(data.Search);
  };

  useEffect(() => {
    searchMovies("action");
  }, []);

  const page = () => {
    const names = [
      "Please Check Your Internet",
      "An error just occured",
      "Poor connection",
    ];
    const render = Math.floor(Math.random() * 3);
    return names[render];
  };

  return (
    <div className="container">
      <div className="header">
        <div className="header-p">
          <h1 className="h1">Movie Land</h1>
          <div className="black"></div>
        </div>

        <div className="search">
          <div className="input">
            <input
              type="text"
              placeholder="search for movies"
              value={search}
              onChange={(e) => {
                setsearch(e.target.value);
              }}
            />
            <div
              className="search-icon bx bx-search"
              onClick={() => {
                searchMovies(search);
              }}
            ></div>
          </div>
        </div>
      </div>

      {movies?.length > 0 ? (
        <div className="movie-card">
          {movies.map((movie) => (
            <Movie movie={movie} key={movie} />
          ))}
          ;
        </div>
      ) : (
        <div className="empty">
          <h2>{page()}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
