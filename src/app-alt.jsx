// import React, { lazy, Suspense } from 'react';
// import { Route, Routes, Outlet, Navigate } from 'react-router-dom';
// import { AppLayout } from 'components/AppLayout';

// const Home = lazy(() => import('./pages/Home'));
// const Movies = lazy(() => import('./pages/Movies'));
// const MovieDetails = lazy(() => import('./pages/MovieDetails'));
// const Cast = lazy(() => import('./pages/Cast'));
// const Reviews = lazy(() => import('./pages/Reviews'));

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<AppLayout />}>

//         <Route index element={<Home />} />

//         <Route path="movies" element={<Movies />} />
//           <Route path="movies/:movieId" element={<MovieDetails />}>
//           <Route path="cast" element={<Cast />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>

//         <Route path="*" element={<Navigate to="/" />} />

//       </Route>
//     </Route>
//   );
// };

// export default App;
// //

// //
// import React, { lazy, Suspense } from 'react';
// import { Route, Routes, Outlet, Navigate } from 'react-router-dom';
// import { AppLayout } from 'components/AppLayout';

// const Home = lazy(() => import('./pages/Home'));
// const Movies = lazy(() => import('./pages/Movies'));
// const MovieDetails = lazy(() => import('./pages/MovieDetails'));
// const Cast = lazy(() => import('./pages/Cast'));
// const Reviews = lazy(() => import('./pages/Reviews'));

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<AppLayout />}>

//         <Route index element={<Home />} />
        
//         <Route path="movies" element={<Outlet />}>
//           <Route index element={<Movies />} />
//           <Route
//             path="/movies/:movieId"
//             element={
//               <Suspense fallback={<div>Loading...</div>}>
//                 <MovieDetails />
//               </Suspense>
//             }
//           >
//             <Route
//               path="cast"
//               element={
//                 <Suspense fallback={<div>Loading...</div>}>
//                   <Cast />
//                 </Suspense>
//               }
//             />
//             <Route
//               path="reviews"
//               element={
//                 <Suspense fallback={<div>Loading...</div>}>
//                   <Reviews />
//                 </Suspense>
//               }
//             />
//           </Route>
//         </Route>
//       </Route>
//     </Routes>
//   );
// };

// export default App;