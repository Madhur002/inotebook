import React, { useState } from "react";
import ModeContext from "./modeContext";

const ModeState = () => {

    const [mode, setMode] = useState("light")

    const toggle = () => {
        setMode("dark");
    }

    return (
        <ModeContext.Provider value={{ mode, toggle}}>
            {props.children}
        </ModeContext.Provider>
    )
}

export default ModeState;
