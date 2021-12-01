import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import EditRoadIcon from '@mui/icons-material/EditRoad';
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useFormik } from "formik";
import {formValidationSchema} from './AddMovie'
import { API_URL } from './Global_constant';
export function EditMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null)

  const getMovie = () => {
    fetch(`${API_URL}/movies/${id}`,
      {
        method: "GET"
      }).then((data) => data.json()).then((mv) => setMovie(mv));
  }
  //USE EFFECT HOOK
  useEffect(getMovie, [id]);

 return  movie ? <UpdateMovie movie={movie} /> : "";
}

    /*
    const [name, setName] = useState(movie.name);
    const [poster, setPoster] = useState(movie.poster);
    const [rating, setRating] = useState(movie.rating);
    const [runtime, setRuntime] = useState(movie.runtime);
    const [genre, setGenre] = useState(movie.genre);
    const [overview, setOverview] = useState(movie.overview);
    const [director, setDirector] = useState(movie.director);
    const [yor, setYor] = useState(movie.yor);
    const [cast, setCast] = useState(movie.cast);
  const [trailer, setTrailer] = useState(movie.trailer);*/
function UpdateMovie({movie})
{
    const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
      initialValues: {
        name: movie.name, poster: movie.poster, rating: movie.rating, runtime: movie.runtime,
        genre: movie.genre, overview: movie.overview, director: movie.director, yor: movie.yor, cast: movie.cast,
        trailer: movie.trailer,
      },
      validationSchema: formValidationSchema,
      onSubmit: (updatedMovie) => {
        editMovie(updatedMovie)
      },
    })
     const history = useHistory();
    const editMovie = (updatedMovie) => {
      /* const updatedMovie = {
         name, poster, rating, runtime, genre, overview, director, yor, cast,trailer
       };*/

      fetch(`${API_URL}/movies/${movie.id}`,
        {
          method: "PUT",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedMovie)
        }).then(() => history.push("/movies"));
      /*PROPS
      let copyMovies = [...movies];
      copyMovies[id] = updatedMovie;
     setMovie([...copyMovies]);
     history.push("/films")*/
    };

    const styles = { style: { fontSize: "1.8rem", margin: "1.2rem 0" } };
    const btnstyles = { margin: "2rem", fontSize: "1.5rem" };
    const helperTextStyle = {
      style: {
        fontSize: '1.5rem', margin: "0"
      }
    };

    return (

      <form onSubmit={handleSubmit} className="editMovie-Form">
        <h1 className="TITLE"><EditRoadIcon style={{ fontSize: "4rem" }} /> Edit-Movies</h1>
        <TextField FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.name && touched.name} helperText={errors.name && touched.name && errors.name} variant="standard" value={values.name} id="name" name="name" onChange={handleChange} onBlur={handleBlur} label="Name" />
        <TextField FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.poster && touched.poster} helperText={errors.poster && touched.poster && errors.poster} variant="standard" value={values.poster} id="poster" name="poster" onBlur={handleBlur} onChange={handleChange} label="Poster" />
        <TextField FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.rating && touched.rating} helperText={errors.rating && touched.rating && errors.rating} variant="standard" value={values.rating} id="rating" name="rating" onBlur={handleBlur} onChange={handleChange} label="Rating" />
        <TextField FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.runtime && touched.runtime} helperText={errors.runtime && touched.runtime && errors.runtime} variant="standard" value={values.runtime} id="runtime" name="runtime" onBlur={handleBlur} onChange={handleChange} label="Runtime" />
        <TextField FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.genre && touched.genre} helperText={errors.genre && touched.genre && errors.genre} variant="standard" value={values.genre} id="genre" name="genre" onBlur={handleBlur} onChange={handleChange} label="Genre" />
        <TextField FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.overview && touched.overview} helperText={errors.overview && touched.overview && errors.overview} variant="standard" value={values.overview} id="overview" name="overview" onBlur={handleBlur} onChange={handleChange} label="Overview" />
        <TextField FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.director && touched.director} helperText={errors.director && touched.director && errors.director} variant="standard" value={values.director} id="director" name="director" onBlur={handleBlur} onChange={handleChange} label="Director" />
        <TextField FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.yor && touched.yor} helperText={errors.yor && touched.yor && errors.yor} variant="standard" value={values.yor} id="yor" name="yor" onBlur={handleBlur} onChange={handleChange} label="Year of release" />
        <TextField FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.cast && touched.cast} helperText={errors.cast && touched.cast && errors.cast} variant="standard" value={values.cast} id="cast" name="cast" onBlur={handleBlur} onChange={handleChange} label="Cast" />
        <TextField FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.trailer && touched.trailer} helperText={errors.trailer && touched.trailer && errors.trailer} variant="standard" value={values.trailer} id="trailer" name="trailer" onBlur={handleBlur} onChange={handleChange} label="Trailer URL(Embed)" />
        <Button style={btnstyles} type="submit" color="success" variant="contained">Update Movie</Button>
      </form>

    );
  }
