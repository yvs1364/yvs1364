import React from "react"
import "./Button.css"
function Button({old, number}){
  return(
    <button className="btn-old" onClick={old}> To get old {number} years</button>
  )
}
export default Button
