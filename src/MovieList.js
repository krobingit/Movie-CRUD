import { Movie } from "./Movie";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MovieIcon from '@mui/icons-material/Movie';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function MovieList({ movies,setMovie }) {
  const history = useHistory();
  const styles = {
    fontSize: "3.5rem"}
  return (
    <section className="Movie-list">
      <h1 className="TITLE"><MovieIcon style={{fontSize:"3.5rem"}}/> Movies</h1>
      {movies.map(({ name, poster, rating, overview, runtime, genre, director, yor, cast }, index) =>

        <Movie name={name} pic={poster} rating={rating} overview={overview}
          runtime={runtime} genre={genre} director={director} yor={yor} cast={cast} key={index} id={index}

          editButton={<IconButton color="primary" onClick={()=>{history.push("/movies/edit/"+index)}} >
            <EditIcon style={styles} /></IconButton>}

          deleteButton={<IconButton  onClick={() => {
            const undeleted = movies.filter((mv,idx) => idx !== index);
            setMovie(undeleted);
            }} color="error"><DeleteIcon style={styles}
         /></IconButton>} />

      )}
    </section>
  );
}
