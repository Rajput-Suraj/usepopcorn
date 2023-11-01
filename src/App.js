import { useState } from 'react';

import Logo from './components/Logo';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Search from './components/Search';
import Box from './components/Box';
import MovieList from './components/MovieList';
import NumResults from './components/NumResults';
import WatchedSummary from './components/WatchedSummary';
import WatchedMovieList from './components/WatchedMovieList';
import { tempMovieData, tempWatchedData } from './data/SampleData';

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>

        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
