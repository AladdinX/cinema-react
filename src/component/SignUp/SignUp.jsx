import Modal from "../Modal/Modal";
import React from "react";

class SignUp extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      showModal: false,
      modalMsg: ""
    }
  }
  email = "";
  password = "";

  submitHandler = (e) => {
    e.preventDefault();
    let usrExist = false;
    let newUser = { email: this.email, password: this.password };
    const cleanInput = () => {
      e.target.children[0].value = ""
      e.target.children[1].value = ""
    }
    let list = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
    list.map((value) => {
      return (
        JSON.stringify(value) === JSON.stringify(newUser) ? usrExist = true : 0
      )
    })
    if (usrExist) {
      this.setState({ modalMsg: "User already exist", showModal: true })
      cleanInput();
    } else {
      list.push(newUser)
      localStorage.setItem("users", JSON.stringify(list));
      this.setState({ modalMsg: "welcome, you are signed up", showModal: true })
      cleanInput();
    }
  }
  hideModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (<>
      <h1>Sign Up</h1>
      <form onSubmit={this.submitHandler}>
        <input type="e-mail" placeholder="e-mail" onChange={(e) => { this.email = e.target.value }} required />
        <input type="password" placeholder="password" onChange={(e) => { this.password = e.target.value }} required />
        <input type="submit" value="Sign Up" required />
      </form>
      {this.state.showModal && (
        <Modal hideModal={this.hideModal} titleTxt={this.state.modalMsg} btnText="Dismiss"></Modal>
      )}
    </>
    )
  }
}

export default SignUp