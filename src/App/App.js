import React from 'react'

import Banner from "@Components/Banner"
import Head from '@Components/Head'
import Documents from "@Components/Documents"
import useApp from './useApp'
import Skeleton from '@Components/Skeleton'

import Classes from "./App.module.css"
import "./index.css"


function App({settings}) {
    const {banner, head, docs} = useApp(settings)
    if (docs == null) {
        return (
            <div className={Classes.App}>
                <Skeleton />
            </div>
        )
    }

    const {tile: type} = settings.data
    return (
        <div className={Classes.App}>
            <Banner url={banner}/>
            <Head name={head}/>
            <Documents docs={docs} type={type}/>
        </div>
    )
}

export default App
