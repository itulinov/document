import React from "react"
import useTileMain from './useTileMain'

import Classes from "./TileMain.module.css"


function TileMain({card}) {
    const {
        name=null,
        comment,
        url,
        clsLink,
        styleLink,
        background,
    } = useTileMain(card)

    console.log(name)
    if (name === null) {
        return null
    }

    return (
        <a className={clsLink.join(" ")} style={styleLink} href={url}>
            <div>
                <div className={Classes.title}>{name}</div>
                <div className={Classes.comment}>{comment}</div>
                <div className={Classes.go} style={background}></div>
            </div>
        </a>
    )
}

export default TileMain
