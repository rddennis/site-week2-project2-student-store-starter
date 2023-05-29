import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/logo"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="leftNav">
        <Logo />
      </div>
      <div className="rightNav">
        <ul>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/buy">Buy Now</Link>
          </li>
        </ul>
      </div>
    </nav>

  )
}
