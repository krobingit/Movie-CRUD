import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import EditRoadIcon from '@mui/icons-material/EditRoad';
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function EditMovie() {
 const history = useHistory();
  const { id } = useParams();
  const [movie, setMovie] = useState({ name: '', poster: '', rating: '', runtime: '', genre: '', overview: '', director: '', yor: '', cast: '', trailer: ''})

  const getMovie = () => {
    fetch(`https://6166c4da13aa1d00170a66f9.mockapi.io/movies/${id}`,
      {
        method: "GET"
      }).then((data) => data.json()).then((mv)=>setMovie(mv));
     }
 //USE EFFECT HOOK
  useEffect(getMovie, [id]);

    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [rating, setRating] = useState("");
    const [runtime, setRuntime] = useState("");
    const [genre, setGenre] = useState("");
    const [overview, setOverview] = useState("");
    const [director, setDirector] = useState("");
    const [yor, setYor] = useState("");
    const [cast, setCast] = useState("");
  const [trailer, setTrailer] = useState("");
  useEffect(() => {
    setName(movie.name)
    setPoster(movie.poster)
    setRating(movie.rating)
    setRuntime(movie.runtime)
    setGenre(movie.genre)
    setOverview(movie.overview)
    setDirector(movie.director)
    setYor(movie.yor)
    setCast(movie.cast)
    setTrailer(movie.trailer)
  }, [movie])

   const editMovie = () => {
    const updatedMovie = {
      name, poster, rating, runtime, genre, overview, director, yor, cast,trailer
    };
  fetch(`https://6166c4da13aa1d00170a66f9.mockapi.io/movies/${id}`,
    {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedMovie)
    }).then(() => history.push("/movies"))
    /*PROPS
    let copyMovies = [...movies];
    copyMovies[id] = updatedMovie;
   setMovie([...copyMovies]);
   history.push("/films")*/
  };

   const styles = { style: { fontSize: "1.7rem", margin: "1.2rem 0" } };
  const btnstyles = { margin: "2rem", fontSize: "1.5rem" };

   return (

    <div className="editMovie-Form">
      <h1 className="TITLE"><EditRoadIcon style={{ fontSize: "4rem" }} /> Edit-Movies</h1>
       <TextField inputProps={styles} InputLabelProps={styles} variant="standard" value={name} onChange={(event) => setName(event.target.value)} label="Name" />
      <TextField inputProps={styles} InputLabelProps={styles} variant="standard" value={poster}  onChange={(event) => setPoster(event.target.value)} label="Poster" />
      <TextField inputProps={styles} InputLabelProps={styles} variant="standard" value={rating}  onChange={(event) => setRating(event.target.value)} label="Rating" />
      <TextField inputProps={styles} InputLabelProps={styles} variant="standard" value={runtime}  onChange={(event) => setRuntime(event.target.value)} label="Runtime" />
      <TextField inputProps={styles} InputLabelProps={styles} variant="standard" value={genre}    onChange={(event) => setGenre(event.target.value)} label="Genre" />
      <TextField inputProps={styles} InputLabelProps={styles} variant="standard" value={overview} onChange={(event) => setOverview(event.target.value)} label="Overview" />
      <TextField inputProps={styles} InputLabelProps={styles} variant="standard" value={director} onChange={(event) => setDirector(event.target.value)} label="Director" />
      <TextField inputProps={styles} InputLabelProps={styles} variant="standard" value={yor}     onChange={(event) => setYor(event.target.value)} label="Year of release" />
      <TextField inputProps={styles} InputLabelProps={styles} variant="standard" value={cast}    onChange={(event) => setCast(event.target.value)} label="Cast" />
      <TextField inputProps={styles} InputLabelProps={styles} variant="standard" value={trailer}  onChange={(event) => setTrailer(event.target.value)} label="Trailer URL(Embed)" />
    <Button style={btnstyles} variant="contained" onClick={editMovie}>Update Movie</Button>
  </div>

  );
}
