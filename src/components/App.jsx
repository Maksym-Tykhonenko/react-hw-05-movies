import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

//import Home from 'pages/Home';
//import Movies from 'pages/Movies';
//import MovieDetails from 'pages/MovieDetails';
//import Layout from './Layout';
//import Reviews from './Reviews/Reviews';
//import Cast from './Cast/Cast';

const Home = lazy(() => import("pages/Home"));
const Movies = lazy(() => import("pages/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails"));
const Layout = lazy(() => import("./Layout"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const Cast = lazy(() => import("./Cast/Cast"));


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
