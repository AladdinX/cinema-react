import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";


const SignIn = () => {
  const navigate = useNavigate();
  let [usrLogIn, setUsrLogIn] = useState({
    email: "",
    password: ""
  })
  let [showModal, setShowModal] = useState(false);
  let [modalMsg, setModalMsg] = useState("");
  let loggedIn = {
    status: false,
    usrName: usrLogIn.email
  };
  const hideModal = () => {
    setShowModal(false)
  }
  const submitHandler = (e) => {
    e.preventDefault();
    let list = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
    if (list.length === 0) {
      setShowModal(true);
      setModalMsg("Please sign up first");
    } else {
      list.map((value) => {
        return (
          JSON.stringify(value) === JSON.stringify(usrLogIn) ? loggedIn.status = true : 0
        )
      })
    }
    if (loggedIn.status) {
      navigate("/");
      localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
    } else {
      setShowModal(true);
      setModalMsg("User doesn't exist")
    }
  }

  return (<>
    <h1>Sign In</h1>
    <form onSubmit={submitHandler}>
      <input type="e-mail" placeholder="e-mail" onChange={(e) =>
        setUsrLogIn({ ...usrLogIn, email: e.target.value })} required />
      <input type="password" placeholder="password" onChange={(e) =>
        setUsrLogIn({ ...usrLogIn, password: e.target.value })} required />
      <input type="submit" value="Sign In" required />
    </form>
    {showModal && (
      <Modal hideModal={hideModal} titleTxt={modalMsg} btnText="Dismiss"></Modal>
    )}
  </>
  )
}

export default SignIn;