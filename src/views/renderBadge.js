const { logoBig, logoSmall } = require('../assets/svg/cw_logo')
const googleFont = require('../assets/googleFont')
const getKyuColor = require('../utils/getKyuColor')

module.exports = (data, options) => {
    const {
        username,
        name,
        honor,
        clan,
        skills,
        ranks,
    } = data

    const {
        bright_mode,
    } = options


    const color = {
        bg: bright_mode ? '#f5f5f5' : '#303133',
        fg: bright_mode ? '#b3b3b3' : '#1D1D1F',
        stroke: bright_mode ? '#b3b3b3' : '#020202',
        text: bright_mode ? '#303133' : '#E8E8E8',
        logo: bright_mode ? '#f5f5f5' : '#B92F21'
    }


    const backgroundRender = () => {
        return `
        <path 
        fill="${color.bg}" 
        stroke="${color.stroke}" 
        stroke-miterlimit="10"
    d="M11.547,40L0,20L11.547,0h360.467v40H11.547z" />
        `
    }

    const foregroundRender = () => {
        return `
        <path 
        fill="${color.fg}" 
        stroke="${color.stroke}" 
        stroke-miterlimit="10"
    d="M294.547,40L283,20l11.547-20h93.905L400,20l-11.548,20H294.547z" />
        `
    }

    const textRender = (x, y, fontColor, fontSize, data, fontFamily, fontStyle) => {
        const font_family = fontFamily || 'Arial'
        const font_style = fontStyle || 'normal'
        return `
        <text transform="matrix(1 0 0 1 ${x} ${y})"
        fill="${fontColor}"
        font-family="${font_family}"
        font-style="${font_style}"
        font-size="${fontSize}">${data}</text>
        `
    }

    const logoRender = (colorArg, pathArg) => {
        return `
        <path 
        fill="${colorArg}" 
        d="${pathArg}" />
        `
    }

    const kyuPoligonRender = (x, y, fill, logo, strokeColor) => {
        const bgColoring = fill === 'blue' ? '#C1C1C1' : '#141414'

        return `
        <g id="header" transform="matrix(1 0 0 1 ${x} ${y})">
       
        <polygon fill="${bgColoring}" stroke="${strokeColor}" stroke-miterlimit="10" points="83.891,1.001 77.668,-9.777 66.167,-9.777 65.223,-9.777 
            33.501,-9.777 32.917,-9.777 21.056,-9.777 14.833,1.001 21.056,11.778 32.917,11.778 33.501,11.778 66.167,11.778 66.167,11.777 
            77.668,11.777 	"/>
       
            ${logo}
        </g>
        `

    }

    const render = () => {
        const rankColor = ranks.overall.color
        const kyu_color = getKyuColor(rankColor)

        return `
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
        x="0px"
        y="0px" 
        width="400px" 
        height="40px" 
        viewBox="0 0 400 40" 
        style="enable-background:new 0 0 400 40;"
        xml:space="preserve">
        
       ${googleFont()}


        ${backgroundRender()}
        ${foregroundRender()}
        ${logoRender(color.logo, logoBig)}
       
        ${kyuPoligonRender(0, 19.20, rankColor, logoRender(kyu_color, logoSmall), kyu_color)}
        
        ${name !== null ? [
                textRender(100.5002, 21.00, color.text, 20, name),
                textRender(100.5002, 33.80, '#918A8A', 12, 'alias', 'Lato', 'italic'),
                textRender(128.5002, 33.80, color.text, 13, username, 'Lato', 'italic')
            ] : textRender(100.5002, 26.25, color.text, 20, username)}

        ${textRender(40.7854, 25.25, kyu_color, 14, ranks.overall.name)}
        
        ${textRender(310.3206, 25, color.text, 13, honor)}

        
     </svg>
        `
    }

    return render()
}

