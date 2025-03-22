import React from "react"
import Classes from "./Comment.module.css"

function Comment({comment:html = ""}) {
    return (
        <div className={Classes.Comment}
            dangerouslySetInnerHTML={{ __html: html }}
        ></div>
    )
}

export default Comment
