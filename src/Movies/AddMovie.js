//import { useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useFormik } from "formik";
import * as yup from 'yup';


export const formValidationSchema = ()=> yup.object({
  name: yup.string().required("Required Field"),
  poster: yup.string().required("Required Field").url("Enter a valid URL"),
  rating: yup.string().required("Required Field").max(6,"Max 6 Characters"),
 runtime: yup.string().required("Required Field"),
  genre: yup.string().required("Required Field"),
  overview: yup.string().required("Required Field"),
  director: yup.string().required("Required Field"),
  yor: yup.number('Must be a Number').required("Required Field"),
  cast: yup.string().required("Required Field"),
  trailer: yup.string().required("Required Field").url("Enter a valid URL"),
})
export function AddMovie() {

   const { handleSubmit, values, handleChange, handleBlur, errors, touched }
  = useFormik({
    initialValues: {
      name: "", poster: "", rating: "", runtime: "",
genre:"",overview:"", director:"",yor:"",cast:"",trailer:""},
  validationSchema: formValidationSchema,
  onSubmit: (newMovie) => {
    addMovie(newMovie)
  },
 })
  const history = useHistory();
  /*
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
*/
  const addMovie = (newMovie) => {
   /* const newMovie = {
      name, poster, rating, runtime, genre, overview, director, yor, cast, trailer
    };*/
    /*  setMovie([...movies, newMovie]);
     ;*/
  fetch(`https://6166c4da13aa1d00170a66f9.mockapi.io/movies`,
    {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMovie)
    }).then(() => history.push("/movies"))
}

    const styles = { style: { fontSize: "1.8rem", margin: "1.2rem 0" } }
  const btnstyles = { margin: "2rem", fontSize: "1.5rem" }
  const helperTextStyle = {
    style: {
      fontSize: '1.5rem', margin: "0"
    }
  };
    return (

      <form onSubmit={handleSubmit} className="addMovie-Form">
        <h1 className="TITLE"><AddToDriveIcon style={{ fontSize: "4rem" }} /> Add Movies</h1>
        <TextField FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.name && touched.name} helperText={errors.name && touched.name && errors.name} variant="standard" value={values.name} id="name" name="name" onChange={handleChange} onBlur={handleBlur} label="Name" />
        <TextField FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.poster && touched.poster} helperText={errors.poster && touched.poster && errors.poster}  variant="standard" value={values.poster} id="poster" name="poster" onBlur={handleBlur} onChange={handleChange} label="Poster" />
        <TextField FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.rating && touched.rating} helperText={errors.rating && touched.rating && errors.rating} variant="standard" value={values.rating} id="rating" name="rating" onBlur={handleBlur} onChange={handleChange} label="Rating" />
        <TextField FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.runtime && touched.runtime} helperText={errors.runtime && touched.runtime && errors.runtime} variant="standard" value={values.runtime} id="runtime" name="runtime" onBlur={handleBlur} onChange={handleChange} label="Runtime" />
        <TextField FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.genre && touched.genre} helperText={errors.genre && touched.genre && errors.genre} variant="standard" value={values.genre} id="genre" name="genre" onBlur={handleBlur} onChange={handleChange} label="Genre" />
        <TextField FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.overview && touched.overview} helperText={errors.overview && touched.overview && errors.overview} variant="standard" value={values.overview} id="overview" name="overview" onBlur={handleBlur} onChange={handleChange} label="Overview" />
        <TextField FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.director && touched.director} helperText={errors.director && touched.director && errors.director} variant="standard" value={values.director} id="director" name="director" onBlur={handleBlur} onChange={handleChange} label="Director" />
        <TextField FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.yor && touched.yor} helperText={errors.yor && touched.yor && errors.yor} variant="standard" value={values.yor} id="yor" name="yor" onBlur={handleBlur} onChange={handleChange} label="Year of release" />
        <TextField FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.cast && touched.cast} helperText={errors.cast && touched.cast && errors.cast} variant="standard" value={values.cast} id="cast" name="cast" onBlur={handleBlur} onChange={handleChange} label="Cast" />
        <TextField FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.trailer && touched.trailer} helperText={errors.trailer && touched.trailer && errors.trailer} variant="standard" value={values.trailer} id="trailer" name="trailer" onBlur={handleBlur} onChange={handleChange} label="Trailer URL(Embed)" />
        <Button type="submit" style={btnstyles} variant="contained">Add Movie</Button>
      </form>
    );
  }
