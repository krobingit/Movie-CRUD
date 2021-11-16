import './App.css';
import { MovieList } from './Movies/MovieList';
import { useState } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { AddMovie } from './Movies/AddMovie';
import { MovieDetails } from './Movies/MovieDetails';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { EditMovie } from './Movies/EditMovie';
import IconButton from '@mui/material/IconButton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';
import { TicTacToe } from './TicTacToe/TicTacToe';
import { BasicForm } from './BasicForm';

export default function App() {


  const history = useHistory();
  const [mode, setMode] = useState("dark");
  const Theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const styles = { color: "white", marginRight: "1rem", fontSize: "1.5rem" }
  return (
    <ThemeProvider theme={Theme}>
      <Paper elevation={4} style={{ minHeight: "100vh" }}>
        <div className="App">
          <nav className="navbar">
            <AppBar position="static" style={{ marginBottom: "2.4rem" }}>
              <Toolbar style={{ flexWrap: "wrap" }}>
                <Button variant="text" style={styles} onClick={() => history.push("/")} >Home</Button>
                <Button variant="text" style={styles} onClick={() => history.push("/movies")}>Movies</Button>
                <Button variant="text" style={styles} onClick={() => history.push("/add-movies")}>Add Movie</Button>
                <Button variant="text" style={styles} onClick={() => history.push("/tic-tac-toe")}>Tic-Tac-Toe Game</Button>
                <Button variant="text" style={styles} onClick={() => history.push("/basic-form")}>Basic Form</Button>
                <Button startIcon={Theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} onClick={() => setMode(mode === "dark" ? "light" : "dark")} style={{ margin: "2rem", fontSize: "1.5rem", color: "inherit", marginLeft: "auto" }}
                  variant="text">{mode === "dark" ? "Light" : "Dark"} Mode</Button>
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
              <EditMovie />
            </Route>
            <Route path="/movies/:id">
              <MovieDetails />
            </Route>
            <Route path="/movies">
              <MovieList />
            </Route>
            <Route path="/add-movies">
              <AddMovie />
            </Route>
            <Route path="/tic-tac-toe">
              <TicTacToe />
            </Route>
            <Route path="/basic-form">
              <BasicForm />
            </Route>
            <Route path="**">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Paper>
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


