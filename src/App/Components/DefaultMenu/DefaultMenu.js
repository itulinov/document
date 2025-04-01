import React from "react"
import Classes from "./DefaultMenu.module.css"
import Main from './Main'
import Other from './Other'


function DefaultMenu({docs}) {
    // по три плитки в ряд
    if (docs.length < 4) {
        return (
            <div className={Classes.DefaultMenu}>
                <Other docs={docs} />
            </div>
        )
    }

    // четыре выделены, потом по три в ряд
    const [first, second, third, fourth, ...other] = docs
    return (
        <div className={Classes.DefaultMenu}>
            <Main docs={[first, second, third, fourth]} />
            <Other docs={other} />
        </div>
    )
}

export default DefaultMenu
