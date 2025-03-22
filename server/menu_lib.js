/**
 * Логирование
 * @param {string} value - значение для логирования
 * @param {string} name - название файла лога
 */
function addLog(value, name) {
    var sLogName = name
    if (sLogName == undefined) {
        sLogName = 'menu_lib'
    }

    EnableLog(sLogName)
    LogEvent(sLogName, value)
}

/**
 * Очистить кеш библиотеки
 * @param {string} newFileLib - новый файл
 * @return {XmElem}
 */
function clear(newFileLib) {
    var path = 'x-local://wt/web/custom_projects/menu/'
    var file = 'menu_lib.js'

    if (newFileLib != undefined) {
        file = newFileLib
    }

    DropFormsCache(path + file)
    return OpenCodeLib(path + file)
}

/**
 * Получение подчиненных разделов портала
 * @param {string} id - идентификатор родительского раздела портала
 * @return {string}
 */
function getSql(id) {
    // prettier-ignore
    return (
        "SELECT \n" +
        "   ds.* \n" +
        "   ,od.data.value('(object_data/custom_elems/custom_elem" +
                            "[name=''menu_color'']/value)[1]', 'varchar(max)') "+
                            "AS color \n" +
        "   ,od.data.value('(object_data/custom_elems/custom_elem" +
                            "[name=''menu_image_name'']/value)[1]', " +
                            "'varchar(max)') AS image_name \n" +
        "FROM documents AS ds \n" +
        "LEFT JOIN object_datas AS ods ON ods.object_id = ds.id \n" +
        "               AND ods.object_data_type_id=7473059529848405619 \n" +
        "LEFT JOIN object_data AS od ON od.id=ods.id \n" +
        "WHERE parent_document_id = " + id + " \n" +
        "ORDER BY position"
    )
}

/**
 * Данные для страницы
 * @param {string} id - идентификатор родительского раздела портала
 * @return {object}
 */
function getMainDocument(id) {
    var card = OpenDoc(UrlFromDocID(Int(id))).TopElem

    var url = ""
    if (OptInt(card.resource_id) != undefined) {
        url = "/download_file.html?file_id=" + card.resource_id
    }

    return {
        banner: url,
        head: String(card.name),
    }
}

/**
 * Получить ссылку из раздела портала
 * @param {XmElem} document - раздел портала таблицы documents
 * @param {XmElem} card - TopElem раздела портала
 * @param {string} mode - элемент шаблона для перехода к дочернему разделу
 * @return {string}
 */
function getUrl(document, card, mode) {
    // url задан напрямую
    var isLink = document.GetOptProperty("is_link", false)
    if (isLink && String(document.link_href) != "") {
        return String(document.link_href)
    }

    // url из шаблона
    if (String(document.template) != "") {
        return String(document.template)
    }

    // если есть ссылки на объекты
    if (ArrayOptFirstElem(card.catalogs) != undefined) {
        return "/view_doc.html?mode=doc&doc_id=" + document.id
    }

    // если есть ссылки на файлы
    if (ArrayOptFirstElem(card.files) != undefined) {
        return "/view_doc.html?mode=doc&doc_id=" + document.id
    }

    // перейти к разделу портала
    return "/view_doc.html?mode=" + mode + "&doc_id=" + document.id
}

/**
 * Получение полей из раздела портала
 * @param {XmElem} document - раздел портала из таблицы documents
 * @param {XmElem} card - TopElem раздела портала
 * @param {string} mode - элемент шаблона для перехода к дочернему разделу
 * @return {object}
 */
function getFieldForMenu(document, card, mode) {
    var comment = card.GetOptProperty("comment", "")
    var url = getUrl(document, card, mode)

    return {
        name: String(document.name),
        comment: String(comment),
        url: url,
        color: String(document.color),
        image: String(document.image_name),
    }
}

/**
 * Получение подчиненных разделов из переданного раздела портала
 * @param {string} documentId - идентификатор раздела портала
 * @param {number} userId - идентификатор пользователя
 * @param {string} mode - элемент шаблона для перехода к дочернему разделу
 * @return {array}
 */
function getMenus(documentId, userId, mode) {
    var query = getSql(documentId)
    //addLog(query)
    var documents = XQuery("sql: " + query)
    if (ArrayOptFirstElem(documents) == undefined) {
        return []
    }

    var user = OpenDoc(UrlFromDocID(Int(userId))).TopElem
    var result = []

    var doc, menu, card, isAccess
    for (doc in documents) {
        card = OpenDoc(UrlFromDocID(Int(doc.id))).TopElem
        isAccess = tools_web.check_access(card, userId, user)
        if (!isAccess) {
            continue
        }

        menu = getFieldForMenu(doc, card, mode)
        result.push(menu)
    }

    return result
}

/**
 * Получение данных для страницы меню
 * @param {string} documentId - идентификатор раздела портала
 * @param {number} userId - идентификатор пользователя
 * @param {string} mode - элемент шаблона для перехода к дочернему разделу
 * @return {array}
 */
function getMenu(documentId, userId, mode) {
    var sMode = String(mode)
    if (sMode == "") {
        sMode = "menu"
    }

    var menu = getMainDocument(documentId)
    menu.menus = getMenus(documentId, userId, sMode)

    return [menu]
}
