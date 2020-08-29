import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import "./Results.css";
import axios from "./axios";
import requests from "./requests";
function Results({ selectedOption }) {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);

      console.log(request);
      setmovies(request.data.results);
    }

    fetchData();
  }, [selectedOption]);
  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard movie={movie} />
      ))}
    </div>
  );
}

export default Results;
