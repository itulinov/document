/**
 * Логирование
 * @param {string} value - значение для логирования
 * @param {string} name - название файла лога
 */
function addLog(value, name) {
    var sLogName = name
    if (sLogName == undefined) {
        sLogName = 'get_menu'
    }

    EnableLog(sLogName)
    LogEvent(sLogName, value)
}




// entry point
try {
    var path = 'x-local://wt/web/custom_projects/menu/'
    var file = 'menu_lib.js'
    var LIB = OpenCodeLib(path + file).clear()

    RESULT = LIB.getMenu(document_id, curUserID, mode)
    ERROR = 0;
    MESSAGE = ""
}
catch (err) {
    addLog("ERROR: " + err)
    ERROR = 1
    MESSAGE = String(err)
    RESULT = []
}

