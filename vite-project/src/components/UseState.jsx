import { useState } from "react"

function UseState(){
   
    const [ state, setState ] = useState(true)


    
     function handleClick(){
       setState(!state)
    }

     const themeStyle = {
        backgroundColor : state? "black" : "grey",
        color: state ? "grey" : "black",
        padding: '2rem',
        margin: '2rem',
    }

    return(
        <>
          <button onClick={handleClick}>Toggle for useState</button>
          <div style={themeStyle}>This is made using useState</div>
        </>
    )
}

export default UseState