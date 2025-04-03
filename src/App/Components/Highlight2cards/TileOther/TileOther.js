import React from "react"
import getSrcFromName from "@App/libs/getSrcFromName.js"
import Classes from "./TileOther.module.css"

function TileOther({card}) {
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
        backgroundImage: "url(\"" + getSrcFromName("tile_arrow_white") + "\")",
    }


    return (
        <a className={Classes.TileOther} style={style}>
            <div>
                <div className={Classes.comment}>{comment}</div>
                <div className={Classes.title}>{name}</div>
                <div className={Classes.go} style={background}></div>
            </div>
        </a>
    )
}

export default TileOther
