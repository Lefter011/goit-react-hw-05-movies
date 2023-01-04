import style from './movieDetails.module.css'
import { useEffect, useState } from "react";
import { useParams, Outlet, Link, useLocation} from "react-router-dom";
import { fetchCurrentFilm } from 'components/API';

const MovieDetails = () => {
    const [goBackState, setGoBackState] = useState('/movies'),
        { movieId } = useParams(),
        [currentFilm, setCurrentFilm] = useState({}),
        location = useLocation();

    useEffect(() => {
        if (goBackState === '/movies') setGoBackState(location.state?.from ?? '/movies');
        fetchCurrentFilm(movieId).then(res => {
            setCurrentFilm({ ...res })
        })
    }, [movieId, location, goBackState])
    return <>
        {currentFilm.id && <div>
            <Link to={goBackState} className={style.backBtn}>go back</Link>
            <div>
                {currentFilm.backdrop_path? <img src={`https://image.tmdb.org/t/p/w500${currentFilm.backdrop_path}`} alt="" />: <p>We can't find movie poster :(</p>}
            <div>
                <h1>{currentFilm.title || currentFilm.name}({currentFilm.release_date.substr(0, 4)})</h1>
                <p>User score: {Number(currentFilm.vote_average * 10).toFixed()}%</p>
                <h2>Overview</h2>
                <p>{currentFilm.overview}</p>
                <h2>Genres:</h2>
                <p>{currentFilm.genres.map(genre => { 
                    return `${genre.name} `;
                })
                }</p>
                </div>
            </div>
            <div>
                <h3>Additional information</h3>
                <ul>
                    <li><Link to='cast'>Cast</Link></li>
                    <li><Link to='reviews'>Reviews</Link></li>
                </ul>
            </div>
            <Outlet />
        </div>}
    </>
}

export default MovieDetails;