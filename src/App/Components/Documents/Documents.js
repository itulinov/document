import React from "react"
import DefaultMenu from "@Components/DefaultMenu"
import Highlight2cards from "@Components/Highlight2cards"

import Classes from "./Documents.module.css"


function Documents({docs, type:theme=""}) {
    // тема по умолчанию, с выделением четырех элементов
    if (theme === "highlight_4_cards") {
        return <DefaultMenu docs={docs}/>
    }

    if (theme === "highlight_2_cards") {
        return <Highlight2cards docs={docs}/>
    }


    return (
        <DefaultMenu docs={docs} type={type}/>
    )
}

export default Documents
