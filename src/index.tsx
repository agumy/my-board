import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

const root = document.getElementById("root")!

ReactDOM.render(<A />, root)

function A() {
  return <div className="m-10">Hello, world!</div>
}
