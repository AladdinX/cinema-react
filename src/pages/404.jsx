import { useNavigate } from "react-router-dom"

const A404 = () => {
  const navigate = useNavigate();
  const goHome = () => { navigate("/") };

  return (
    <div style={{ textAlign: "center" }} >
      <h1>Page Not Found - 404</h1>
      <button onClick={goHome}>Home</button>
    </div>
  )
}
export default A404