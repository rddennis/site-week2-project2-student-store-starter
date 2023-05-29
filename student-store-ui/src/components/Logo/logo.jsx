import * as React from "react"
import { Link } from "react-router-dom"
import "./logo.css"

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/"><img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"></img></Link>
    </div>
  )
}