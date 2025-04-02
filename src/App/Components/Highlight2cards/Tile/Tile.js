import React from "react"
import getSrcFromName from "@App/libs/getSrcFromName.js"
import Classes from "./Tile.module.css"

function Tile({card}) {
    if (!card) {
        return null
    }

    const {
        name,
        image,
        comment,
    } = card

    let style = {}
    if (image) {
        style = {
            backgroundImage: "url(\"" + image + "\")",
            color: "#fff"
        }
    }

    const background = {
        backgroundImage: "url(\"" + getSrcFromName("tile_hover") + "\")",
    }


    return (
        <a className={Classes.Tile} style={style}>
            <div className={Classes.title}>{name}</div>
            <div className={Classes.comment}>{comment}</div>
            <div className={Classes.go} style={background}></div>
        </a>
    )
}

export default Tile
