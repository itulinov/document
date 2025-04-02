import React from "react"
import Tile from '../Tile'

import Classes from "./Main.module.css"


function Main({docs}) {
    // первые четыре элемента
    const [first, second, third, fourth] = docs

    if (!fourth) {
        return (
            <div className={Classes.Main}>
                <div className={Classes.first}>
                    <Tile card={first} />
                </div>
                <div className={Classes.second} style={{flexDirection: "row"}}>
                    <Tile card={second} />
                    <Tile card={third} />
                </div>
            </div>
        )
    }

    return (
        <div className={Classes.Main}>
            <div className={Classes.first}>
                <Tile card={first} image="images/tile_01.svg" />
            </div>
            <div className={Classes.second}>
                <div>
                    <Tile card={second} />
                    <Tile card={third} />
                </div>
                <div>
                    <Tile card={fourth} image="images/tile_02.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Main
