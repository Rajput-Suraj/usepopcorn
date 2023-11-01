import { useState } from 'react';

import Logo from './components/Logo';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Search from './components/Search';
import ListBox from './components/ListBox';
import MovieList from './components/MovieList';
import NumResults from './components/NumResults';
import WatchedBox from './components/WatchedBox';
import { tempMovieData } from './data/SampleData';

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <ListBox>
          <MovieList movies={movies} />
        </ListBox>
        <WatchedBox />
      </Main>
    </>
  );
}
