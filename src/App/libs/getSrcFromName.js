import banner from "@img/banner.jpeg"
import book_green from "@img/book_green.png"
import book_orange from "@img/book_orange.png"
import question from "@img/question.png"
import talk from "@img/talk.png"
import monitor from "@img/monitor.png"


/**
 * Получить исходник файла по названию
 * @param {string} name - название картинки
 * @param {any}
 */
export default (name) => {
    const files = {
        banner,
        book_green,
        book_orange,
        question,
        talk,
        monitor,
    }

    return files[name]
}
