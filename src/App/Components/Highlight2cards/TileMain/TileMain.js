import React from "react"
import getSrcFromName from "@App/libs/getSrcFromName.js"
import Classes from "./TileMain.module.css"

function TileMain({card}) {
    if (!card) {
        return null
    }

    const {
        name,
        image,
        comment,
        color,
        url,
    } = card

    let style = {}
    if (image) {
        style = {
            backgroundImage: "url(\"" + image + "\")",
            color: "#fff",
            backgroundColor: color,
        }
    }

    const background = {
        backgroundImage: "url(\"" + getSrcFromName("tile_arrow_black") + "\")",
    }


    return (
        <a className={Classes.TileMain} style={style} href={url}>
            <div>
                <div className={Classes.title}>{name}</div>
                <div className={Classes.comment}>{comment}</div>
                <div className={Classes.go} style={background}></div>
            </div>
        </a>
    )
}

export default TileMain
