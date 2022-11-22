import { useNavigate } from "react-router-dom";
import Movies from "./component/Movie/Movie";

const App = () => {
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
  const addFilm = () => {
    if (loggedIn && loggedIn.status === true) {
      navigate("/addMovie");
    } else {
      navigate("/Profile");
    }
  }

  return (
    <div className="container">
      <button onClick={addFilm}>Add Movie</button>
      <Movies />
    </div>
  )
}

export default App
