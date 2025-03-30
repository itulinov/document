import getSrcFromName from "@App/libs/getSrcFromName.js"
import {colorToCode} from '@App/libs/convertColor'

/**
 * 
 * @return {object}
 */
export default (tile, name) => {
    const {image="", color} = tile
    if (image !== "") {
        return {
            type: "font",
            name: image,
            color: color,
        }
    }

    return {
        type: "assets",
        image: getSrcFromName(name),
    }
}
