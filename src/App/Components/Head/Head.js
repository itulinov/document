import React from "react"
import Classes from "./Head.module.css"

function Head({name="", type=""}){
    if (name === "") {
        return null
    }

    if (type === "highlight_2_cards") {
        return (
            <div className={Classes.Head}>
                <div>
                    <div className={Classes.hash}>#</div>
                    <div className={Classes.title}>{name}</div>
                </div>
            </div>
        )
    }

    return <div className={Classes.head_default}>{name}</div>
}

export default Head
