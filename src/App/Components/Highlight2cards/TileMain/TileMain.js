import React from "react"
import useTileMain from './useTileMain'

function TileMain({card}) {
    const {
        name=null,
        comment,
        url,
        clsLink,
        styleLink,
        clsTitle,
        clsComment,
        clsGo,
        styleGo,
    } = useTileMain(card)

    if (name === null) {
        return null
    }

    return (
        <a className={clsLink.join(" ")} style={styleLink} href={url}>
            <div>
                <div className={clsTitle.join(" ")}>{name}</div>
                <div className={clsComment.join(" ")}>{comment}</div>
                <div className={clsGo.join(" ")} style={styleGo}></div>
            </div>
        </a>
    )
}

export default TileMain
