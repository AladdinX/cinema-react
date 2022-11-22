const Modal = (props) => {

  return (
    <div>
      <div className="overlay"></div>
      <div className="modal">
        <h1> {props.titleTxt}</h1>
        <button onClick={props.hideModal}> {props.btnText}</button>
      </div>
    </div>
  )
}
export default Modal;