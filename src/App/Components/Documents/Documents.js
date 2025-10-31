import React from "react"
import DefaultMenu from "@Components/DefaultMenu"
import Highlight2cards from "@Components/Highlight2cards"

import Classes from "./Documents.module.css"


function Documents({docs, type=""}) {
    if (type === "highlight_2_cards") {
        return <Highlight2cards docs={docs}/>
    }

    return (
        <DefaultMenu docs={docs}/>
    )
}

export default Documents
