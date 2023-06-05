import {Text} from './Reviews.styled'


import { useParams } from "react-router-dom";

const Reviews = () => {

    const { movieId } = useParams();
    

    return (
        <>
            <Text>Pевью фільма: {movieId }</Text>
        </>
    )
};

export default Reviews;