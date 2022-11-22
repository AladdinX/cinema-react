import { NavLink } from "react-router-dom"

export default function Header() {

  return (
    <div className="header">
      <NavLink to="/">Cinema React</NavLink>
      <NavLink className="profile" to="/Profile">PR0FILE</NavLink>
    </div>
  )
}