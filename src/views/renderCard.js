const {
    logoBig,
    logoSmall
} = require('../assets/svg/cw_logo')

const googleFont = require('../assets/googleFont')

const {
    getKyuColor,
    findInObj
} = require('../utils')

const {
    textRender,
    logoRender,
    kyuPoligonRender
} = require('./components')

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

    const displayName = (x, y) => {
        const hasNameOnly = findInObj(options, 'name_only')
        const hasAliasOnly = findInObj(options, 'alias_only')

        if (name !== null && !hasNameOnly && !hasAliasOnly || name !== null && hasNameOnly && hasAliasOnly) {
            return [
                textRender(x, y, color.text, 20, name),
                textRender(x, (y + 12.80), '#918A8A', 12, 'alias', 'Lato', 'italic'),
                textRender((x + 28), (y + 12.80), color.text, 13, username, 'Lato', 'italic')
            ]

        } else if (name !== null && hasNameOnly) {
            return textRender(x, (y + 6.25), color.text, 20, name)

        } else if (name !== null && hasAliasOnly) {
            return textRender(x, (y + 6.25), color.text, 20, username)

        } else {
            return textRender(x, (y + 6.25), color.text, 20, username)
        }
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
            ${kyuPoligonRender(0, -1, rankColor, kyuColor, logoRender(kyuColor, logoSmall))}
            ${textRender(40.7854, 4, kyuColor, 14, ranks.overall.name)}
            ${displayName(100.5002, 0)}

            </svg>
        `
    }

    return render()
}