import { Counter } from "./Counter";
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions';
import InfoIcon from '@mui/icons-material/Info';



export function Movie({ name, pic, rating, overview, runtime, genre, director, yor, cast,deleteButton,editButton,id}) {

 const styles = {
   color: rating < 8 ? "crimson" : "green"
 }

  const cardActionStyle = {justifyContent:"space-evenly"}
 const [show, setShow] = useState(true);
  const history = useHistory();
  return (
    <div className="movie-container">
      <Card sx={{
        maxWidth: 400
      }}>
      <div>
        <h1 className="movie-title">{name}</h1>
          <img className="poster" src={pic} alt={name}></img>
      </div>
      <CardContent>
      <div className="detail-container">
        <div className="sub-detail">
          <p className="sub-heading rating" >IMDb Rating: ⭐ <span style={styles}>{rating}</span>/10</p>
          <p className="sub-heading runtime">Runtime: {runtime}</p>

          </div>
          <div>
           <Button style={{ fontSize: "2rem", marginTop:"0", textTransform: "none",marginRight:"2rem" }}
              onClick=
              {() => {
                history.push("/movies/" + id);
              }}
            ><InfoIcon style={{ fontSize: "2.5rem", margin: "1rem" }}
              />Watch Trailer</Button>
          <Button id="showbtn" onClick={() => setShow(!show)}>{show ? "Hide" :"Show"} Overview</Button>
</div>

     {show ? <div className="summary">
      <h2 className="sub-heading over">Overview:</h2>
      <p>{overview}</p>
     </div> : ""}

        <div className="other-details">
          <div>
            <h1 className="sub-heading">Genre</h1>
            <p>{genre}</p>
          </div>
          <div>
            <h1 className="sub-heading">Director</h1>
            <p>{director}</p>
          </div>
          <div>
            <h1 className="sub-heading">Year of Release</h1>
            <p>{yor}</p>
          </div>
          <div>
            <h1 className="sub-heading">Cast</h1>
            <p>{cast}</p>
          </div>
        </div>
          <CardActions style={cardActionStyle}>
        <Counter /> {editButton}
            {deleteButton}
            </CardActions>
        </div>
      </CardContent>
   </Card>
      </div>




  );
}
