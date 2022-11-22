import { useNavigate } from "react-router-dom";

const Movies = () => {
  const allMovies = localStorage.getItem("allMovies") ?
    JSON.parse(localStorage.getItem("allMovies")) : [];
  const navigate = useNavigate();
  const goToMoviePage = (value) => {
    navigate("/movies/" + value.name,
      { state: { movie: value } })
  }

  return (
    allMovies.map((value, index) => {
      return (
        <div key={index} className="movieCard">
          <img src={value.img} alt="" />
          <h1>{value.name}</h1>
          <h3>{value.subTitle}</h3>
          <button onClick={(e) => goToMoviePage(value)}> Read more </button>
        </div>
      )
    })
  )
}

export default Movies