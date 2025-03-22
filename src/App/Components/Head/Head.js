import React from "react"
import Classes from "./Head.module.css"

function Head({name = ""}){
    if (name === "") {
        return null
    }

    return (
        <div className={Classes.Head}>{name}</div>
    )
}

export default Head
