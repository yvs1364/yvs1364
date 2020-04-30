import React, {  Fragment }from "react"

function Member ({ name, children, age, hideName, handleChange }) {
  return (
    <Fragment>
    <h2 style = {{backgroundColor: age < 10 ?  "white" : "cyan",
     color: age < 10 ?  "black" : "white"}}>  {name} : {age}
     </h2>
     <input value={name}
     onChange= {handleChange} type="text" />
     <button className="btn-x" onClick={hideName}> x </button>
    {children ?   <p>{children}</p> : <Fragment />}
    </Fragment>
  )
}
export default Member
