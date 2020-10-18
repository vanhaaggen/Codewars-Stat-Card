const {
    logoBig,
    logoSmall,
    honorIcon,
    logo
} = require('../assets/svg/cw_logo')

const googleFont = require('../assets/googleFont')

const {
    getKyuColor,
    findInObj
} = require('../utils')

const {
    textRender,
    logoRender,
    kyuLevelRender,
    nameRender
} = require('./components')

const REQUIRED_SCORE = {
    kyu8: 0,
    kyu7: 20,
    kyu6: 76,
    kyu5: 229,
    kyu4: 643,
    kyu3: 1768,
    kyu2: 4829,
    kyu1: 13147,
    dan1: 35759,
    dan2: 97225
}

module.exports = (data, options) => {

    const {
        username,
        name,
        honor,
        ranks,
    } = data

    const isBrightMode = findInObj(options, 'bright_mode')

    const color = {
        bg: isBrightMode ? '#f5f5f5' : '#303133',
        fg: isBrightMode ? '#b3b3b3' : '#1D1D1F',
        stroke: isBrightMode ? '#b3b3b3' : '#020202',
        text: isBrightMode ? '#303133' : '#E8E8E8',
        logo: isBrightMode ? '#f5f5f5' : '#B92F21'
    }

    const background = (fill) => {
        return `
            <g id="card">
            <rect x="0" y="-30" fill="${fill}" width="400" height="180"/>
            </g>
       `
    }

    const foreground = (fill) => {
        return `
        <polygon 
        fill="${fill}" 
        points="302.992,-19 297.25,-19 291.008,-19 285.016,0.624 291.008,20.25 296.11,20.25 302.992,20.25 
		400,20.25 400,-19 	"/>
        `
    }

    const progressBarRender = (currentKyu, userScore) => {
        const X2_LIMIT = 400
        const kyuAbs = Math.abs(currentKyu)
        const nextKyuRank = REQUIRED_SCORE[`kyu${kyuAbs - 1}`]
        const currentKyuRank = REQUIRED_SCORE[`kyu${kyuAbs}`]
        const diffToNextRank = nextKyuRank - currentKyuRank

        const progress = ((userScore - currentKyuRank) * 100 / diffToNextRank).toFixed(2)
        const result = (progress * 1) * X2_LIMIT / 100

        return `
        <line 
        fill="#ECB613" 
        stroke="#ECB613" 
        stroke-width="13" 
        stroke-miterlimit="10" 
        x1="0" 
        y1="39.5" 
        x2="${result}" 
        y2="39.5"
        />
        ${textRender(20.5002, 43.5, '#AAAAAA', 13, (progress + '%'))}
        `
    }

    const render = () => {
        const rankColor = ranks.overall.color
        const kyuColor = getKyuColor(rankColor)

        return `
            <svg 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            x="0px" 
            y="0px" 
            width="400px"
            height="180px" 
            viewBox="0 -30 400 180" 
            enable-background="new 0 -30 400 180" 
            xml:space="preserve">
            ${googleFont()}

            ${background(color.bg)}
            ${foreground(color.fg)}
            ${kyuLevelRender(0, -1, rankColor, kyuColor, logoRender(0, 0, kyuColor, logoSmall), ranks.overall.name)}
            ${nameRender(100.5002, -0.5, name, username, color.text, options)}
            ${textRender(307.3206, 5, color.text, 12, honor)}
            ${logoRender(0, 0, color.text, honorIcon)}
            ${logoRender(0, -19.15, color.logo, logoBig)}
            ${progressBarRender(ranks.overall.rank, ranks.overall.score)}
            </svg>
        `
    }

    return render()
}