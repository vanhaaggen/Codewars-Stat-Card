const getKyuColor = (color) => {
    switch (color) {
        case 'white':
            return '#EEEEEE';
        case 'yellow':
            return '#ECB613';
        case 'blue':
            return '#0077EE';
        case 'purple':
            return '#B500ED'

    }
}

const findInObj = (obj, string) => {
    const hasInObj = Object.keys(obj).findIndex(key => key === string)
    if (hasInObj !== -1) {
        return true
    } else {
        return false
    }
}

module.exports = {
    getKyuColor,
    findInObj
}