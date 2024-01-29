import { useEffect, useState } from "react"

function UseEffect(){

    const [ state, setState] = useState(true)
    const [themeStyle , setThemeStyle] = useState({
        
            backgroundColor : state? "black" : "grey",
            color : state ? "grey" : "black",
            padding : '2rem',
            margin : '2rem',
        
    })

    function handleClick(){
        setState(!state)
    }

    useEffect( ()=>(
        setThemeStyle({
            backgroundColor : state? "black" : "grey",
            color : state ? "grey" : "black",
            padding : '2rem',
            margin : '2rem',
        })
    ), [state])

    

    return(
        <>
            <button onClick={handleClick}>Toggle for useState</button>
            <div style={themeStyle}>This is made by using useState</div>
        </>
    )
}

export default UseEffect