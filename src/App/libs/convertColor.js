const codeToColor = (color) => {
    switch(color) {
        case "#e3f2ff": return "blue"
        case "#e7f6eb": return "green"
        case "#fff4e1": return "orange"
        case "#e0f7fb": return "turquoise"
        case "#f3e7fe": return "purple"
        case "#fae4f7": return "pink"
        case "#fff7d7": return "yellow"
        case "#ffecef": return "scarlet"
    }

    return null
}

const colorToCode = (color) => {
    switch(color) {
        case "blue":        return "#e3f2ff"
        case "green":       return "#e7f6eb"
        case "orange":      return "#fff4e1"
        case "turquoise":   return "#e0f7fb"
        case "purple":      return "#f3e7fe"
        case "pink":        return "#fae4f7"
        case "yellow":      return "#fff7d7"
        case "scarlet":     return "#ffecef"
    }

    return null
}


export {colorToCode, codeToColor}
