import { useLocation, useNavigate } from "react-router-dom";

const MovieItem = () => {
  let location = useLocation();
  let navigate = useNavigate();
  let goBack = () => navigate(-1);

  return (
    <div className="movieItem">
      <button onClick={goBack}>All Movies</button>
      <h1>Movie Name: {location.state.movie.name}</h1>
      <h2>Movie SubTitle: {location.state.movie.subTitle}</h2>
      <h5>Description: {location.state.movie.description}</h5>
    </div>
  )
}

export default MovieItem 