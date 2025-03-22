import React from "react"
import Classes from "./Name.module.css"

function Name({name:html, important = false}) {
    const cls = [Classes.Name]
    if (important) {
        cls.push(Classes.important)
    }

    return (
        <div className={cls.join(" ")}
            dangerouslySetInnerHTML={{ __html: html }}
        ></div>
    )
}

export default Name
