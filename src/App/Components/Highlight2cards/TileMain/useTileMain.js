import React, { useState } from "react"
import getSrcFromName from "@App/libs/getSrcFromName.js"

import Classes from "./TileMain.module.css"
import Background from '../Background.module.css'


export default (card) => {
    console.log(card)
    if (!card) {
        return {}
    }

    const {
        name,
        image,
        comment,
        color,
        url,
    } = card

    const clsTitle = [Classes.title]
    const clsComment = [Classes.comment]
    const clsGo = [Classes.go]
    const clsLink = [Classes.TileMain]
    if (color) {
        clsLink.push(Background[color])
    }

    let arrow = getSrcFromName("tile_arrow_white")

    let styleGo = {backgroundImage: "url(\"" + arrow + "\")"}
    let styleLink = {}

    // если есть картинка
    if (image) {
        clsTitle.push(Classes.title_white)
        clsComment.push(Classes.comment_white)
        styleLink = {backgroundImage: "url(\"" + image + "\")"}

        arrow = getSrcFromName("tile_arrow_white")
        styleGo = { backgroundImage: "url(\"" + arrow + "\")"}
    }

    return {
        name,
        comment,
        url,
        clsLink,
        styleLink,
        clsTitle,
        clsComment,
        clsGo,
        styleGo,
    }
}
