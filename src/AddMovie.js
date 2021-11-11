import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function AddMovie({ movies, setMovie }) {
const history = useHistory();
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

  const addMovie = () => {
    const newMovie = {
      name, poster, rating, runtime, genre, overview, director, yor, cast,trailer
    };
    setMovie([...movies, newMovie]);
    history.push("/films");
  };

  const styles = { style: { fontSize: "1.7rem", margin: "1.2rem 0" } }
const btnstyles={margin:"2rem",fontSize:"1.5rem"}
  return (

    <div className="addMovie-Form">
      <h1 className="TITLE"><AddToDriveIcon style={{fontSize:"4rem"}}/> Add-Movies</h1>
      <TextField inputProps={styles}   InputLabelProps={styles} variant="standard" value={name} onChange={(event) => setName(event.target.value)} label="Name" />
      <TextField inputProps={styles}   InputLabelProps={styles} variant="standard" value={poster} onChange={(event) => setPoster(event.target.value)} label="Poster" />
      <TextField inputProps={styles}   InputLabelProps={styles} variant="standard" value={rating} onChange={(event) => setRating(event.target.value)} label="Rating" />
      <TextField inputProps={styles}   InputLabelProps={styles} variant="standard" value={runtime} onChange={(event) => setRuntime(event.target.value)} label="Runtime" />
      <TextField inputProps={styles}   InputLabelProps={styles} variant="standard" value={genre} onChange={(event) => setGenre(event.target.value)} label="Genre" />
      <TextField inputProps={styles}   InputLabelProps={styles} variant="standard" value={overview} onChange={(event) => setOverview(event.target.value)} label="Overview" />
      <TextField inputProps={styles}   InputLabelProps={styles} variant="standard" value={director} onChange={(event) => setDirector(event.target.value)} label="Director" />
      <TextField inputProps={styles}   InputLabelProps={styles} variant="standard" value={yor} onChange={(event) => setYor(event.target.value)} label="Year of release" />
      <TextField inputProps={styles}   InputLabelProps={styles} variant="standard" value={cast} onChange={(event) => setCast(event.target.value)} label="Cast" />
<TextField inputProps={styles}   InputLabelProps={styles} variant="standard" value={trailer} onChange={(event) => setTrailer(event.target.value)} label="Trailer URL(Embed)" />
      <Button style={btnstyles} variant="contained" onClick={addMovie}>Add Movie</Button>
    </div>
  );
}
