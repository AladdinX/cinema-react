import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  let [newMovie, setNewMovie] = useState({
    name: "",
    subTitle: "",
    description: ""
  });
  let allMovies = localStorage.getItem("allMovies") ? JSON.parse(localStorage.getItem("allMovies")) : [];
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    allMovies.unshift(newMovie)
    localStorage.setItem("allMovies", JSON.stringify(allMovies));
    navigate("/")
  }
  return (
    <div className="add">
      <form onSubmit={submitHandler}>
        <h1>Add your new Movie</h1>
        <input type="text" placeholder="Name"
          onChange={(e) => setNewMovie({ ...newMovie, name: e.target.value })} required />
        <input type="text" placeholder="Sub Title"
          onChange={(e) => setNewMovie({ ...newMovie, subTitle: e.target.value })} required />
        <input type="text" placeholder="Description"
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })} required />
        <input type="submit" value="add" />
      </form>
    </div>
  )
}

export default AddMovie;