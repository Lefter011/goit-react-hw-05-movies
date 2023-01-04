import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchPopularFilms } from "components/API";

const Home = () => {
    const [popularFilms, setPopularFilms] = useState([]);
    const location = useLocation();
    useEffect(() => {
        fetchPopularFilms().then(res => {
            setPopularFilms([...res.results])
        })
    }, [])
    return <>
        <ul>
            {popularFilms.map((film) => {
                return <li key={film.id}><Link to={`/movies/${film.id}`} state={{ from: location }}>{ film.title || film.name }</Link></li>
            })}
        </ul>
    </>
}

export default Home;