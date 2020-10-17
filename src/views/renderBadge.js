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

    const displayName = () => {
        const hasNameOnly = findInObj(options, 'name_only')
        const hasAliasOnly = findInObj(options, 'alias_only')

        if (name !== null && !hasNameOnly && !hasAliasOnly || name !== null && hasNameOnly && hasAliasOnly) {
            return [
                textRender(100.5002, 21.00, color.text, 20, name),
                textRender(100.5002, 33.80, '#918A8A', 12, 'alias', 'Lato', 'italic'),
                textRender(128.5002, 33.80, color.text, 13, username, 'Lato', 'italic')
            ]

        } else if (name !== null && hasNameOnly) {
            return textRender(100.5002, 26.25, color.text, 20, name)

        } else if (name !== null && hasAliasOnly) {
            return textRender(100.5002, 26.25, color.text, 20, username)

        } else {
            return textRender(100.5002, 26.25, color.text, 20, username)
        }
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
        style="enable-background:new 0 0 400 40;"
        xml:space="preserve">
        
       ${googleFont()}

        ${backgroundRender()}

        ${foregroundRender()}

        ${logoRender(color.logo, logoBig)}
       
        ${kyuPoligonRender(0, 19.20, rankColor, kyuColor, logoRender(kyuColor, logoSmall))}
        
        ${displayName()}

        ${textRender(40.7854, 25.25, kyuColor, 14, ranks.overall.name)}
        
        ${textRender(310.3206, 25, color.text, 13, honor)}

        
     </svg>
        `
    }

    return render()
}

