import React, { useState } from "react"
import getImage from './libs/getImage'
import {colorToCode} from '@App/libs/convertColor'

export default (menu) => {
    function getValue(value, color, name, important) {
        var tile = {...value}

        tile.img = getImage(tile, name)

        tile.color = colorToCode(tile.color)
        if (tile.color === null) {
            tile.color = color
        }

        if (!!important) {
            tile.important = true
        }

        return tile
    }

    // одна строчка для меню
    const record = ((menu) => {
        let [first, second, third, fourth] = menu

        // если элементов три
        if (fourth == undefined) {
            const result = []

            for (let i = 0; i < menu.length; i++) {
                result.push( getValue(menu[i],  "#e3f2ff", "monitor") )
            }

            return result
        }

        // если элементов четыре
        first =  getValue(first,  "#e7f6eb", "book_green", true)
        second = getValue(second, "#fff4e1", "book_orange")
        third =  getValue(third,  "#e0f7fb", "talk")
        fourth = getValue(fourth, "#f3e7fe", "question")

        return [first, second, third, fourth]
    })(menu)


    return record
}
