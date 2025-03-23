import React from "react"
import Classes from "./Menu.module.css"
import Main from './Main'
import Other from './Other'

function Menu({menu, type}) {
    // по три плитки в ряд
    if (menu.length < 4) {
        return (
            <div className={Classes.Menu}>
                <Other menu={menu} />
            </div>
        )
    }

    // по три плитки в ряд
    if (type === "simple") {
        return (
            <Other menu={menu} type={type} />
        )
    }

    // четыре выделены, потом по три в ряд
    const [first, second, third, fourth, ...other] = menu
    return (
        <div className={Classes.Menu}>
            <Main menu={[first, second, third, fourth]} />
            <Other menu={other} />
        </div>
    )
}

export default Menu
