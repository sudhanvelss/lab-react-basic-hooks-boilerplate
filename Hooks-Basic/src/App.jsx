import React,{ useState }from "react";
import './App.css'
import  Toggle  from "./components/Toggle";
export const ToggleTheme = React.createContext()

function App(){
  // const [state, setState] = useState(true)
  // const handleToggle = () => {
  //   setState(state => ! state)
  // }

  return(
  //   <ToggleTheme.Provider value={state}>
  //     <button onClick={handleToggle} style={{textAlign:"center"}}>Toggle</button>
    <Toggle/>
  //   </ToggleTheme.Provider>
  )
}
export default App