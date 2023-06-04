import { useParams } from "react-router-dom";

const Cast = () => {

    const { movieId } = useParams();
    //console.log(`${movieId}`)

    return (
        <>
            <p>Каст фільма {movieId }</p>
        </>
    )
};

export default Cast;