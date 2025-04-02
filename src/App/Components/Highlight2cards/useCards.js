import React, { useState } from "react"
import getSrcFromName from "@App/libs/getSrcFromName.js"

export default (docs) => {
    let [first, second, third, fourth, ...other] = docs

    if (first && !first.image) {
        first.image = getSrcFromName("tile_01")
    }

    if (fourth && !fourth.image) {
        fourth.image = getSrcFromName("tile_02")
    }

    return [first, second, third, fourth, ...other]
}
