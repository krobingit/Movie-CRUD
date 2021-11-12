import './App.css';
import { MovieList } from './MovieList';
import { useState } from 'react';
import { Switch, Route,Redirect } from "react-router-dom";
import { AddMovie } from './AddMovie';
import { MovieDetails } from './MovieDetails';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { EditMovie } from './EditMovie';
import IconButton from '@mui/material/IconButton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles'

export default function App() {
  const Initial_Movies = [{
    name: "Avengers:Endgame",
    poster: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
    rating: "8.4",
    runtime: "3h",
    genre: "Action/Sci-Fi",
    overview: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    director: "Russo Brothers",
    yor: "2019",
    cast: "Robert Downey Jr, Chris Evans, Mark Ruffalo, Chris Hemsworth",
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c"
  }, {
    name: "The Dark Knight",
    poster: "https://img.posterlounge.co.uk/images/l/1899010.jpg",
    rating: "9",
    runtime: "2h 32min",
    genre: "Action,Crime,Drama",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    director: "Christopher Nolan",
    yor: "2008",
    cast: "Christian Bale, Heath Ledger",
    trailer: "https://www.youtube.com/embed/_PZpmTj1Q8Q"
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
    cast: "Leonardo Di-Caprio, Tom Hardy, Cillian Murphy",
    trailer: "https://www.youtube.com/embed/Qwe6qXFTdgc"
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
    cast: "Mathew McConaughey, Anne Hathaway",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
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
    cast: "Christian Bale, Anne Hathaway, Tom Hardy",
    trailer: "https://www.youtube.com/embed/g8evyE9TuYk"
  },
  {
    name: "The Matrix",
    poster: "https://mypostercollection.com/wp-content/uploads/2018/07/The-Matrix-Poster-MyPosterCollection.com-14.jpg",
    rating: "7.9",
    runtime: "2h 16min",
    genre: "Action/Sci-Fi",
    overview: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    director: "Lana Wachowski",
    yor: "1999",
    cast: "Keanu Reaves, Carrie-Annie Moss",
    trailer: "https://www.youtube.com/embed/tGgCqGm_6Hs"

  }]

  const [movies, setMovie] = useState(Initial_Movies);
  const history = useHistory();
  const theme = createTheme({
  palette: {
    mode: 'light',
  },
  });
  const styles = { color:"white",marginRight:"1rem",fontSize: "1.5rem" }
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <nav className="navbar">
        <AppBar position="static" style={{marginBottom:"2.4rem"}}>
          <Toolbar style={{flexWrap:"wrap"}}>
            <Button variant="text" style={styles} onClick={()=>history.push("/")} >Home</Button>
            <Button  variant="text" style={styles} onClick={()=>history.push("/movies")}>Movies</Button>
            <Button  variant="text" style={styles} onClick={() => history.push("/add-movies")}>Add Movie</Button>
            <Button  variant="text" style={styles} onClick={()=>history.push("/tic-tac-toe")}>Tic-Tac-Toe Game</Button>
            <Button style={{ margin: "2rem", fontSize: "1.5rem",color:"inherit",marginLeft:"auto" }} variant="text">Dark Mode</Button>
          </Toolbar>
        </AppBar>
</nav>

        <IconButton style={{ marginRight: "auto" }} size="small" color="secondary" onClick={() => history.goBack()}
          variant="contained"><KeyboardBackspaceIcon style={{ fontSize: "3rem" }} /></IconButton>

      <Switch>
        <Route exact path="/">
          <h1 className="heading"><Home /></h1>
        </Route>
        <Route path="/films">
          <Redirect to="/movies" />
        </Route>
        <Route path="/movies/edit/:id">
          <EditMovie movies={movies} setMovie={setMovie} />
        </Route>
        <Route path="/movies/:id">
          <MovieDetails movies={movies} />
        </Route>
        <Route path="/movies">
          <MovieList movies={movies} setMovie={setMovie} />
        </Route>
        <Route path="/add-movies">
          <AddMovie movies={movies} setMovie={setMovie} />
        </Route>
         <Route path="/tic-tac-toe">
          <TicTacToe/>
        </Route>
        <Route path="**">
          <NotFound />
        </Route>
      </Switch>
      </div>
      </ThemeProvider>
  );


}
function Home() {
  return (
    <div>
      <h1 className="TITLE">Welcome to Movies-Section</h1>
      <img style={{ width: "80%", objectFit: "cover", borderRadius: "1rem" }}
        src="https://wallpapercave.com/wp/1rj6nGA.jpg" alt="Inception-Movie-Wallpaper" />

    </div>
  )
}
function NotFound() {
  const history = useHistory();
  return (
    <div class="Error">
      <Button variant="contained" style={{ width: "15rem" }} onClick={() => history.push("/")}>Back to Home</Button>
      <img src="https://cdn.dribbble.com/users/718859/screenshots/3267029/jisunpark_404-error.gif"
        alt="404-Error" />
    </div>

  )
}

function TicTacToe() {
return (
  <div>
    <Gamebox />
    <Gamebox />
  </div>
)
}

function Gamebox() {
const [value, setValue] = useState(null);
  return (<div className="box" onClick={() =>
    setValue(value === "X" ? "0" : "X")}>{value}</div>
  )

}
