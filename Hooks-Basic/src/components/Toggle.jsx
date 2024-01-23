import { useState } from "react";
import "../App.css"
import { ToggleTheme } from "../App";


function Toggle(){
  const [value, setValue] = useState(true)
  const [cont, setCont] = useState(true)
  const [like, setlike] = useState(0)
  const Increament = () => {
    setlike(like + 1)
  }
  function context(){
    alert("Do you want to see the Context click the Ok button")
    setCont(!cont)
  }
  function ToggleButton (){
    setValue(!value)

  }
  return(
    <>
     <div style={{}}>
      <button onClick={ToggleButton}>Toggle</button>
      <div style={{ backgroundColor: value ?"grey" :"black"}} >
      <div><button onClick={context}>Context</button>
      <p style={{display: cont ? "none" : "block"}}>This Toggle effect is all done by Sudhan.S</p></div>
        <div style={{color:"white", textAlign: "center"}}><button onClick={Increament}>Like</button> {like} </div>
      </div>
    </div>
    </>
  )

}

export default Toggle;