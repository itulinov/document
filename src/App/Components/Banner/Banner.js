import React, {useState} from "react"
import getSrcFromName from "@App/libs/getSrcFromName.js"
import Classes from "./Banner.module.css"

function Banner({url=""}){
    if (url === "") {
        return null
    }

    let banner = getSrcFromName(url) // баннер из папки проекта
    if (banner == undefined) {
        banner = url // баннер с сервера
    }

    return (
        <div className={Classes.Banner}>
            <div style={{backgroundImage: "url(" + banner + ")"}} />
        </div>
    )
}

export default Banner
