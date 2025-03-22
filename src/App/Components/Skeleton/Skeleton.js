import React from "react"
import Classes from "./Skeleton.module.css"

function Skeleton() {
    return (
        <div className={Classes.Skeleton}>
            <div className={Classes.banner} />
            <div className={Classes.head} />
            <div className={Classes.menu}>
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    )
}

export default Skeleton
