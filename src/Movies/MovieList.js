import { Movie } from "./Movie";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MovieIcon from '@mui/icons-material/Movie';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState,useEffect} from 'react';
import {API_URL} from "./Global_constant"
export function MovieList() {
  const [movies, setMovies] = useState([]);

//USE EFFECT HOOK
  const getMovies = () => {
    fetch(`${API_URL}/movies`, {
    method:"GET"})
        .then((data) => data.json())
        .then((mvs) => setMovies(mvs))
    }
  useEffect(getMovies, []);

  const deleteMovie = (id) => {
    fetch(`${API_URL}/movies/${id}`, {
      method: "DELETE"
    }).then(() => getMovies());

  };

  const history = useHistory();
  const styles = {
    fontSize: "3.5rem"
  }

  return (
    <section className="Movie-list">
      <h1 className="TITLE"><MovieIcon style={{ fontSize: "3.5rem" }} /> Movies</h1>
      <div className="mov">
        {movies.map(({ name, poster, rating, overview, runtime, genre, director, yor, cast,_id }, index) =>

          <Movie name={name} pic={poster} rating={rating} overview={overview}
            runtime={runtime} genre={genre} director={director} yor={yor} cast={cast} key={_id} id={_id}

            editButton={<IconButton color="primary" onClick={() => { history.push("/movies/edit/"+_id) }} >
              <EditIcon style={styles} /></IconButton>}

            deleteButton={<IconButton onClick={() =>
            deleteMovie(_id)
             /* const undeleted = movies.filter((mv, idx) => idx !== index);
              setMovie(undeleted);*/
            } color="error"><DeleteIcon style={styles}
              /></IconButton>} />

        )}
      </div>
    </section>
  );
}
