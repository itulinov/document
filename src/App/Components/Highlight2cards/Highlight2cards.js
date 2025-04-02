import React from "react"
import Main from './Main'
import Other from './Other'
import useCards from './useCards'

import Classes from "./Highlight2cards.module.css"


function Highlight2cards({docs}) {
    console.log(docs)

    // первые четыре элемента
    const [first, second, third, fourth, ...other] = useCards(docs)

    return (
        <>
            <Main docs={docs} />
            <Other docs={other} />
        </>
    )
}

export default Highlight2cards
