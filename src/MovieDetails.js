import { useParams } from "react-router-dom";

export function MovieDetails({ movies }) {
 const { id } = useParams();

 const movie = movies[id];
 return (
  <div class="movie-detail">
   <h1 style={{ fontSize:"3rem", color: "orangered" }}>{movie.name}</h1>
   <iframe width="70%" height="409" src={movie.trailer} className="Video" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write;
encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
   <p className="sum"><span className="sub-heading">Summary:</span><br></br>{movie.overview}</p>
  </div>
 )
}
