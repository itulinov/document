import React from "react"
import Tile from '@Components/shared/Tile'
import useMain from './useMain'

import Classes from "./Main.module.css"


function Main({menu}) {
    const [first, second, third, fourth] = useMain(menu)

    const cls = [Classes.second]
    if (fourth == undefined) {
        cls.push(Classes.record)
    } else {
        cls.push(Classes.widthAuto)
    }


    return (
        <div className={Classes.Main}>
            <div className={Classes.first}>
                <Tile card={first} />
            </div>
            <div className={cls.join(" ")}>
                <Tile card={second} />
                <Tile card={third} />
                <Tile card={fourth} />
            </div>
        </div>
    )
}

export default Main
