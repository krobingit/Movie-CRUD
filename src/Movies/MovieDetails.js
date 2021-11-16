import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

export function MovieDetails() {
 const { id } = useParams();

   const [movie, setMovie] = useState({})
   useEffect(() => {
      fetch(`https://6166c4da13aa1d00170a66f9.mockapi.io/movies/${id}`)
         .then(data => data.json())
         .then(mv => setMovie(mv))
   },[id])
 return (
  <div className="movie-detail">
   <h1 style={{ fontSize:"3rem", color: "orangered" }}>{movie.name}</h1>
   <iframe width="70%" height="409" src={movie.trailer} className="Video" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write;
encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
   <p className="sum"><span className="sub-heading">Summary:</span><br></br>{movie.overview}</p>
  </div>
 )
}
