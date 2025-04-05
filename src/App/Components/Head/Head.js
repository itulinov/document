import React from "react"
import Classes from "./Head.module.css"

function Head({name = ""}){
    if (name === "") {
        return null
    }

    return (
        <div className={Classes.Head}>
            <div>
                <div className={Classes.hash}>#</div>
                <div className={Classes.title}>{name}</div>
            </div>
        </div>
    )
}

export default Head
