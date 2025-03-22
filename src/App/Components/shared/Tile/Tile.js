import React from "react"
import {codeToColor} from '@App/libs/convertColor'
import Name from './Name'
import Comment from './Comment'
import Image from './Image'

import Colors from "@App/Components/shared/css/Colors.module.css"
import Classes from "./Tile.module.css"


function Tile({card}) {
    if (card == undefined) {
        return null
    }

    //получить имя класса для бордера
    var border = ((color) => {
        const result = codeToColor(color)
        if (result === null) {
            return "b_blue"
        }

        return "b_" + result
    })(card.color)

    const cls = [Classes.Tile, Colors[border]]
    const url = card.url ? card.url : "javascrpt:"
    const backgroundColor = {backgroundColor: card.color}

    return (
        <a href={url} className={cls.join(" ")} style={backgroundColor}>
            <div className={Classes.padding}>
                <div className={Classes.image}>
                    <Image img={card.img} />
                </div>
                <div className={Classes.content}>
                    <Name name={card.name} important={card.important} />
                    <Comment comment={card.comment} />
                </div>
            </div>
        </a>
    )
}

export default Tile
