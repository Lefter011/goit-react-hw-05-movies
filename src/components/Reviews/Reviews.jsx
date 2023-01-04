import { fetchReviews } from "components/API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
    const { movieId } = useParams();
    const [currentReviews, setCurrentReviews] = useState([]);
    useEffect(() => {
        fetchReviews(movieId).then(res => {
            setCurrentReviews([...res.results])
        })
    }, [movieId])
    return <>
        <ul>
            {currentReviews.length? currentReviews.map((review) => {
                return <li key={review.id}>
                    <h3>Author: {review.author}</h3>
                    <p>{review.content }</p>
                </li>
            }): 'Sorry, no one has left a review yet :('}
        </ul>
    </>
}

export default Reviews;