import banner from "@img/banner.jpeg"
import book_green from "@img/book_green.png"
import book_orange from "@img/book_orange.png"
import question from "@img/question.png"
import talk from "@img/talk.png"
import monitor from "@img/monitor.png"
import tile_01 from "@img/tile_01.svg"
import tile_02 from "@img/tile_02.jpg"
import tile_arrow_white from "@img/tile_arrow_white.svg"
import tile_arrow_black from "@img/tile_arrow_black.svg"


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
        tile_01,
        tile_02,
        tile_arrow_white,
        tile_arrow_black,
    }

    return files[name]
}
