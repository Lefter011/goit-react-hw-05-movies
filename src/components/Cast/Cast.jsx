import { fetchCurrentCast } from "components/API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Cast = () => {
    const { movieId } = useParams();
    const [currentCast, setCurrentCast] = useState([]);
    useEffect(() => {
        fetchCurrentCast(movieId).then(res => {
            setCurrentCast([...res.cast]);
        })
    }, [movieId])

    return <>
        <ul>
            {currentCast.map(character => {
                return <li key={character.cast_id}>
                    <img src={character.profile_path? `https://image.tmdb.org/t/p/w500${character.profile_path}` : '//i.work.ua/career_guide/59_b.png'} alt={character.name} width='200' />
                    <p>Character: {character.character}</p>
                    <p>Name: {character.name}</p>
                </li>
            })}
    </ul>
    </>
}

export default Cast;