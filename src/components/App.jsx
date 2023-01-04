import { lazy, Suspense } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import style from './app.module.css';
import styled from "styled-components";

const Movies = lazy(() => import("pages/Movies/Movies")),
      Home = lazy(() => import("../pages/Home/Home")),
      MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails")),
      Cast = lazy(() => import("./Cast/Cast")),
      Reviews = lazy(() => import("./Reviews/Reviews")),
      Container = lazy(() => import("./Container/Container")),
      Error = lazy(() => import("pages/Error/Error"));



export const App = () => {

  return <Container>
    
      <nav className={style.navList}>
        <Link to="/"  className={style.navLink}>Home</Link>
        <Link to="/movies" className={style.navLink}>Movies</Link>
    </nav>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MovieDetails />}>
      <Route path="cast" element={<Cast />} />
      <Route path="reviews" element={<Reviews/>} />
      </Route>
      <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  </Container>
}


const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: orange;
  }
`;