import './App.css';
import { useState } from 'react';
export default function App() {
  /*
  const movies = [{
    name: "Avengers:Endgame",
    poster: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
    rating: "8.4",
    runtime: "3h",
    genre: "Action/Sci-Fi",
    overview: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    director: "Russo Brothers",
    yor: "2019",
    cast: "Robert Downey Jr, Chris Evans, Mark Ruffalo, Chris Hemsworth"
  }, {
    name: "The Dark Knight",
    poster: "https://img.posterlounge.co.uk/images/l/1899010.jpg",
    rating: "9",
    runtime: "2h 32min",
    genre: "Action,Crime,Drama",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    director: "Christopher Nolan",
    yor: "2008",
    cast: "Christian Bale, Heath Ledger"
  },
  {
    name: "Inception",
    poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
    rating: "8.8",
    runtime: "2h 28min",
    genre: "Action/Sci-Fi",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    director: "Christopher Nolan",
    yor: "2010",
    cast: "Leonardo Di-Caprio, Tom Hardy, Cillian Murphy"
  },
  {
    name: "Interstellar",
    poster: "https://www.joblo.com/wp-content/uploads/2014/09/interstellar_water-1.jpg",
    rating: "8.6",
    runtime: "2h 49min",
    genre: "Adventure/Sci-Fi",
    overview: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    director: "Christopher Nolan",
    yor: "2014",
    cast: "Mathew McConaughey, Anne Hathaway"
  },
  {
    name: "The Dark Knight Rises",
    poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
    rating: "8.4",
    runtime: "2h 45min",
    genre: "Action/Thriller",
    overview: "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
    director: "Christopher Nolan",
    yor: "2012",
    cast: "Christian Bale, Anne Hathaway, Tom Hardy"
  },
  {
    name: "The Matrix",
    poster: "https://mypostercollection.com/wp-content/uploads/2018/07/The-Matrix-Poster-MyPosterCollection.com-14.jpg",
    rating: "8.7",
    runtime: "2h 16min",
    genre: "Action/Sci-Fi",
    overview: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    director: "Lana Wachowski",
    yor: "1999",
    cast: "Keanu Reaves, Carrie-Annie Moss"
  }]
  */
  return (
    <div className="App">
<AddColor/>
    </div>

  );
}
/*
   <MovieList movies={movies} />
function MovieList(movies) {
  return (
    <section className="Movie-list">
      <h1 className="TITLE">Movies</h1>
     {movies.movies.map((mov) => <Movie name={mov.name} pic={mov.poster} rating={mov.rating} overview={mov.overview}
        runtime={mov.runtime} genre={mov.genre} director={mov.director} yor={mov.yor}
        cast={mov.cast} />)}
    </section>
  );
}
function Movie({ name, pic, rating, overview, runtime, genre, director, yor, cast }) {
  return (
    <div className="movie-container">
      <div>
        <h1 className="movie-title">{name}</h1>
        <img className="poster" src={pic} alt={name}></img>
      </div>
      <div className="detail-container">
        <div className="sub-detail">
          <p className="sub-heading rating">IMDb Rating: ⭐{rating}/10</p>
          <p className="sub-heading runtime">Runtime: {runtime}</p>
        </div>
        <div className="summary">
          <h2 className="sub-heading over">Overview:</h2>
          <p>{overview}</p>
        </div>
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
       <Counter />
      </div>
    </div>
  );
}


function Counter() {
  const [like, setLike] = useState(0);

  const [dislike, setDislike] = useState(0);
  return (
    <div>
      <button className='btn' onClick={() => {
        setLike(like + 1)
      }}>👍 {like}
      </button>

      <button className='btn' onClick={() => {
        setDislike(dislike + 1)
      }}>👎 {dislike}
      </button>

    </div>
  )

}

*/

function ColorBox({color}){
  const styles = {
    backgroundColor: color,
    width: "150px",
    height: "50px",
    marginTop: "10px",
  };

return <div style={styles}></div>
}

function AddColor() {
  const [color, setColor] = useState("pink")
  const styles = { backgroundColor: color };
  const [colors, setColors] = useState(["teal", "orange", "blue"]);
  return (
  <div>
    <input value={color} onchange={(event) => setColor(event.target.value)} style={styles} placeholder="enter a color"/>
      <button onclick={()=>setColors([...colors,color])}>Add Color</button>
      {colors.map((clr) =><ColorBox color={clr}/>)}
  </div>

  )



}