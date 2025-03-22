export default (settings) => {
    const {document_id: id} = settings.data

    // из адресной строки
    const params = new URLSearchParams(window.location.search);
    var urlId = params.get("doc_id")
    if (urlId !== null && urlId !== "") {
        return urlId
    }

    // из элемента шаблона
    return id
}
