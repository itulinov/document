import React from "react"
import Classes from "./Image.module.css"
import Colors from "@App/Components/shared/css/Colors.module.css"

function Image({img={}}) {
    const {
        color,
        name,
        type,
        image,
    } = img

    if (type === "font") {
        const cls = [Classes.icons, Colors[color]]
        return (
            <div className={cls.join(" ")}>{name}</div>
        )
    }

    const background = {backgroundImage: "url(" + image + ")"}
    return (
        <div className={Classes.Image} style={background} />
    )

}

export default Image
