import { useNavigate } from "react-router-dom"
import SignIn from "../../component/SignIn/SignIn"
import SignUp from "../../component/SignUp/SignUp"

const Profile = () => {
  const navigate = useNavigate();
  const signOut = () => {
    localStorage.setItem("loggedIn", false);
    navigate("/");
  }

  return (
    <div className="forms">
      <SignUp />
      <hr></hr>
      <SignIn />
      <hr></hr>
      {localStorage.getItem("loggedIn") && <button onClick={signOut}>Sign out</button>}
    </div>
  )
}
export default Profile