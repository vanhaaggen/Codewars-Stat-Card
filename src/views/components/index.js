const { findInObj } = require('../../utils/index')
const { fetchIcon } = require('../../utils/fetcher')

const textRender = (x, y, fontColor, fontSize, data, fontStyle) => {
    const fntStyle = fontStyle || 'normal'

    return `
        <text transform="matrix(1 0 0 1 ${x} ${y})"
        fill="${fontColor}"
        font-family="Sans-Serif"
        font-style="${fntStyle}"
        font-size="${fontSize}"
        >${data}</text>
        `
}

const logoRender = (x, y, colorArg, pathArg) => {
    return `
    <g transform="matrix(1 0 0 1 ${x} ${y})">
    <path 
    fill="${colorArg}" 
    d="${pathArg}" />
    </g>
    `
}

const kyuLevelRender = (x, y, rankColor, kyuColor, logo, data) => {
    const X_AXIS = 40.5002
    const Y_AXIS = 5.35

    const bgColoring = rankColor === 'blue' ? '#C1C1C1' : '#141414'

    return `
    <g id="header" transform="matrix(1 0 0 1 ${x} ${y})">
    <polygon 
    fill="${bgColoring}" 
    stroke="${kyuColor}" 
    stroke-miterlimit="10" 
    points="83.891,1.001 77.668,-9.777 66.167,-9.777 65.223,-9.777 
        33.501,-9.777 32.917,-9.777 21.056,-9.777 14.833,1.001 21.056,11.778 32.917,11.778 33.501,11.778 66.167,11.778 66.167,11.777 
        77.668,11.777 	
    "/>   
    ${textRender(X_AXIS, Y_AXIS, kyuColor, 14, data)}
    ${logo}
    </g>
    `
}

const nameRender = (x, y, name, username, textColor, options) => {
    const hasNameOnly = findInObj(options, 'name_only')
    const hasAliasOnly = findInObj(options, 'alias_only')

    if (name !== null && !hasNameOnly && !hasAliasOnly || name !== null && hasNameOnly && hasAliasOnly) {
        return [
            textRender(x, y, textColor, 20, name),
            textRender(x, (y + 12.80), '#918A8A', 12, 'alias', 'italic'),
            textRender((x + 28), (y + 12.80), textColor, 12, username, 'italic')
        ]

    } else if (name !== null && hasNameOnly) {
        return textRender(x, (y + 6.25), textColor, 20, name)

    } else if (name !== null && hasAliasOnly) {
        return textRender(x, (y + 6.25), textColor, 20, username)

    } else {
        return textRender(x, (y + 6.25), textColor, 20, username)
    }
}

const iconPLComponent = (dataObj, color1, color2) => {
    const { languages } = dataObj
    const language = Object.keys(languages)
    let x = 18

    let components = []

    for (let i = 0; i < language.length; i++) {
        const icon = fetchIcon(language[i])
        let component = `
        <g transform="matrix(1 0 0 1 ${x} 114)">
        <path
        fill="${color1}"
        d="${icon.path}"
        />
        <g transform="matrix(1 0 0 1 28 8.5)">
            ${textRender(0, 0, color2, 10, 'score:')}
            ${textRender(0, 13, color2, 13, Object.values(languages)[i].score)}
        </g>
        </g>
        `
        x += 92
        components.push(component)

    }
    return components

}

module.exports = {
    textRender,
    logoRender,
    kyuLevelRender,
    nameRender,
    iconPLComponent
}