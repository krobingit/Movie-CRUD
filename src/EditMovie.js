import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import EditRoadIcon from '@mui/icons-material/EditRoad';
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function EditMovie({ movies, setMovie }) {
 const history = useHistory();
  const { id } = useParams();
  const movie = movies[id];
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [runtime, setRuntime] = useState(movie.runtime);
  const [genre, setGenre] = useState(movie.genre);
  const [overview, setOverview] = useState(movie.overview);
  const [director, setDirector] = useState(movie.director);
  const [yor, setYor] = useState(movie.yor);
  const [cast, setCast] = useState(movie.cast);
  const [trailer, setTrailer] = useState(movie.trailer);
  const editMovie = () => {
    const updatedMovie = {
      name, poster, rating, runtime, genre, overview, director, yor, cast
    };
    let copyMovies = [...movies];
    copyMovies[id] = updatedMovie;
   setMovie([...copyMovies]);
   history.push("/films")
  };

  const styles = { style: { fontSize: "1.7rem", margin: "1.2rem 0" } };
  const btnstyles = { margin: "2rem", fontSize: "1.5rem" };
  return (

    <div className="editMovie-Form">
      <h1 className="TITLE"><EditRoadIcon style={{ fontSize: "4rem" }} /> Edit-Movies</h1>
      <TextField inputProps={styles} InputLabelProps={styles} variant="standard" value={name} onChange={(event) => setName(event.target.value)} label="Name" />
      <TextField inputProps={styles} InputLabelProps={styles} variant="standard" value={poster} onChange={(event) => setPoster(event.target.value)} label="Poster" />
      <TextField inputProps={styles} InputLabelProps={styles} variant="standard" value={rating} onChange={(event) => setRating(event.target.value)} label="Rating" />
      <TextField inputProps={styles} InputLabelProps={styles} variant="standard" value={runtime} onChange={(event) => setRuntime(event.target.value)} label="Runtime" />
      <TextField inputProps={styles} InputLabelProps={styles} variant="standard" value={genre} onChange={(event) => setGenre(event.target.value)} label="Genre" />
      <TextField inputProps={styles} InputLabelProps={styles} variant="standard" value={overview} onChange={(event) => setOverview(event.target.value)} label="Overview" />
      <TextField inputProps={styles} InputLabelProps={styles} variant="standard" value={director} onChange={(event) => setDirector(event.target.value)} label="Director" />
      <TextField inputProps={styles} InputLabelProps={styles} variant="standard" value={yor} onChange={(event) => setYor(event.target.value)} label="Year of release" />
      <TextField inputProps={styles} InputLabelProps={styles} variant="standard" value={cast} onChange={(event) => setCast(event.target.value)} label="Cast" />
      <TextField inputProps={styles} InputLabelProps={styles} variant="standard" value={trailer} onChange={(event) => setTrailer(event.target.value)} label="Trailer URL(Embed)" />
    <Button style={btnstyles} variant="contained" onClick={editMovie}>Update Movie</Button>
    </div>
  );

}
