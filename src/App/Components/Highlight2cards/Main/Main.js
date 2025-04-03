import React from "react"
import TileMain from '../TileMain'
import TileOther from '../TileOther'

import Classes from "./Main.module.css"


function Main({docs}) {
    // первые четыре элемента
    const [first, second, third, fourth] = docs

    if (!fourth) {
        return (
            <div className={Classes.Main}>
                <div className={Classes.first}>
                    <TileOther card={first} />
                </div>
                <div className={Classes.second} style={{flexDirection: "row"}}>
                    <TileOther card={second} />
                    <TileOther card={third} />
                </div>
            </div>
        )
    }

    return (
        <div className={Classes.Main}>
            <div className={Classes.first}>
                <TileMain card={first} />
            </div>
            <div className={Classes.second}>
                <div>
                    <TileOther card={second} />
                    <TileOther card={third} />
                </div>
                <div>
                    <TileMain card={fourth} />
                </div>
            </div>
        </div>
    )
}

export default Main
