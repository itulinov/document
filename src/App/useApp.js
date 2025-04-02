import React, { useState, useEffect } from "react"
import useApiRequest from './hooks/useApiRequest'
import getDocId from './libs/getDocId'

export default (settings) => {
    const docId = getDocId(settings) // получение родительского раздела портала

    // основные данные для приложения
    const [banner, setBanner] = useState("")
    const [head, setHead] = useState("")
    const [docs, setDocs] = useState(null)

    // запрос к серверу
    const [run] = useApiRequest((result) => {
        if (!result.success) {
            console.log("ERROR: ошибка получения первичных данных")
            return
        }

        const {banner, head, menus} = result.results[0]

        setBanner(banner)
        setHead(head)
        setDocs(menus)
    })

    useEffect(() => {
        if (docId === null || docId === undefined) {
            return
        }

        const {url_to_api, collection_id, mode} = settings.data
        run(url_to_api, {
            action: "collection",
            id: collection_id,
            wvars: {
                document_id: docId,
                mode,
            }
        })
    }, [])

    // вывод дефолтных данных
    // если родительский раздел портала не определен
    if (docId === null || docId === undefined) {
        console.log("ERROR: document_id not defined")
        return {}
    }

    return {banner, head, docs}
}
