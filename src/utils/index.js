const svgIcons = require('../assets/svg/svgIcons')
const simpleIcon = require('simple-icons');


const getKyuColor = (color) => {
    switch (color) {
        case 'white':
            return '#EEEEEE';
        case 'yellow':
            return '#ECB613';
        case 'blue':
            return '#0077EE';
        case 'purple':
            return '#B500ED';
        case 'black':
            return '#020202'

    }
}

const getColors = (mode) => {

    switch (mode) {
        case 'bright_mode':
            return {
                bg: '#f5f5f5',
                fg: '#b3b3b3',
                stroke: '#b3b3b3',
                text: '#303133',
                secTxt: '#AAAAAA',
                logo: '#f5f5f5'
            }
        case 'dark_mode':
            return {
                bg: '#303133',
                fg: '#1D1D1F',
                stroke: '#020202',
                text: '#E8E8E8',
                secTxt: '#AAAAAA',
                logo: '#B92F21'
            }
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

const parseCustomColor = (string) => {
    let def = {
        bg: '#303133',
        fg: '#1D1D1F',
        stroke: '#020202',
        text: '#E8E8E8',
        secTxt: '#AAAAAA',
        logo: '#B92F21'
    }

    const queries = string.split('_')
    const keys = queries.map(key => key.split(':'))

    keys.forEach(key => {
        Object.keys(def).findIndex(val => val === key[0]) >= 0 ? def[key[0]] = `#${key[1]}` : ''
    })

    return def
}


const SCORE = new Map()
SCORE.set(-8, 0)
SCORE.set(-7, 20)
SCORE.set(-6, 76)
SCORE.set(-5, 229)
SCORE.set(-4, 643)
SCORE.set(-3, 1768)
SCORE.set(-2, 4829)
SCORE.set(-1, 13147)
SCORE.set(1, 35759)
SCORE.set(2, 97225)


const progressBar = (currentKyu, userScore) => {
    const MAX_BAR_LENGHT = 400
    const isNegative = Math.sign(currentKyu) === -1 ? true : false
    const currentKyuRank = SCORE.get(currentKyu)
    let isMasterLevel = false
    let nextKyuRank

    if (isNegative && currentKyu !== -1 || !isNegative && currentKyu === 1) {
        nextKyuRank = SCORE.get(currentKyu + 1)

    } else if (currentKyu === -1) {
        nextKyuRank = SCORE.get(currentKyu + 2)

    } else if (!isNegative && currentKyu === 2) {
        isMasterLevel = true
    }

    const diffToNextRank = nextKyuRank - currentKyuRank

    const progressPercentage = !isMasterLevel ? ((userScore - currentKyuRank) * 100 / diffToNextRank).toFixed(1) : 'master'
    const progressBarLenght = !isMasterLevel ? (progressPercentage * 1) * MAX_BAR_LENGHT / 100 : 100

    return {
        progressPercentage,
        progressBarLenght
    }
}

function getIcon(iconName) {
    if (!iconName) throw new Error('no logo name queried')

    const icon = simpleIcon.get(iconName)

    return icon !== undefined ? icon.path : svgIcons[iconName]
}


module.exports = {
    getKyuColor,
    getColors,
    findInObj,
    progressBar,
    SCORE,
    getIcon,
    parseCustomColor
}