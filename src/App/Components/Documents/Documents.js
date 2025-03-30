import React from "react"
import DefaultMenu from "@Components/DefaultMenu"
import Classes from "./Documents.module.css"


function Documents({docs, type}) {
    console.log(type)
    // тема по умолчанию, с выделением четырех элементов
    if (type === "highlight_4_cards") {
        return <DefaultMenu docs={docs} type={type}/>
    }


    return (
        <DefaultMenu docs={docs} type={type}/>
    )
}

export default Documents
