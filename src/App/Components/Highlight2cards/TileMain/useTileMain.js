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

    const clsLink = [Classes.TileMain]
    if (color) {
        clsLink.push(Background[color])
    }

    let arrow = getSrcFromName("tile_arrow_white")
    let background = {backgroundImage: "url(\"" + arrow + "\")"}
    let styleLink = {}
    if (image) {
        styleLink = {backgroundImage: "url(\"" + image + "\")"}

        arrow = getSrcFromName("tile_arrow_white")
        background = { backgroundImage: "url(\"" + arrow + "\")"}
    }

    return {name, comment, url, clsLink, styleLink, background}
}
