import { useContext } from "react";
import { ToggleTheme } from "../App";

function UseContext(){

    const theme = useContext(ToggleTheme)
    console.log(theme)

    const themeStyle = {
        backgroundColor : theme? "black" : "grey",
        color : theme ? "grey" : "black",
        padding : '2rem',
        margin : '2rem',
    }

    return(
        <div style={themeStyle}>
            This is made using useContext
        </div>
    )
}

export default UseContext