const {
    logoBig,
    logoSmall
} = require('../assets/svg/cw_logo')

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

    const render = () => {
        const rankColor = ranks.overall.color
        const kyuColor = getKyuColor(rankColor)

        return `
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
        x="0px"
        y="0px" 
        width="400px" 
        height="40px" 
        viewBox="0 0 400 40" 
        xml:space="preserve"> 
      
        ${backgroundRender()}

        ${foregroundRender()}

        ${logoRender(0, 0, color.logo, logoBig)}
       
        ${kyuLevelRender(0, 19.20, rankColor, kyuColor, logoRender(0, 0, kyuColor, logoSmall), ranks.overall.name)}
        
        ${nameRender(100.5002, 20.5002, name, username, color.text, options)}
        
        ${textRender(310.3206, 25, color.text, 13, honor)}
        </svg>
        `
    }

    return render()
}

