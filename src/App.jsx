import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';


const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Cast = lazy(() => import('./pages/Cast'));
const Reviews = lazy(() => import('./pages/Reviews'));

<Route path="/" element={<AppLayout />}></Route>

export const App = () => {
  return (
    <div>
    <Routes>  
              
        <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
        </Route>

        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {' '}
              <Home />{' '}
            </Suspense>
          }
        />
        <Route
          path="/movies"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {' '}
              <Movies />{' '}
            </Suspense>
          }
        />
        <Route
          path="/movies/:movieId"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {' '}
              <MovieDetails />{' '}
            </Suspense>
          }
        >
          <Route
            path="cast"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                {' '}
                <Cast />{' '}
              </Suspense>
            }
          />
          <Route
            path="reviews"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                {' '}
                <Reviews />{' '}
              </Suspense>
            }
          />
        </Route>
      </К>
    </div>
  );
};
