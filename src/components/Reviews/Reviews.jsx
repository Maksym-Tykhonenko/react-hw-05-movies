import { useParams } from "react-router-dom";

const Reviews = () => {

    const { movieId } = useParams();
    

    return (
        <>
            <p>Pевью фільма: {movieId }</p>
        </>
    )
};

export default Reviews;