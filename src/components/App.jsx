import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Layout from './Layout';
import Reviews from './Reviews/Reviews';
import Cast from './Cast/Cast';


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/list' element={<Movies />} />
          <Route path='/list/:movieId' element={<MovieDetails />} >
            <Route path='cast' element={<Cast/> } />
            <Route path='reviews' element={<Reviews/> } />
          </Route>
        </Route>
        
      </Routes>
    </div>
  );
};
