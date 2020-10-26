const {
    logoBig,
    logoSmall,
    honorIcon,
    logo
} = require('../assets/svg/cw_logo')



const {
    getKyuColor,
    findInObj,
    progressBar
} = require('../utils')

const {
    textRender,
    logoRender,
    kyuLevelRender,
    nameRender,
    iconPLComponent
} = require('./components')



module.exports = (data, options) => {

    const {
        username,
        name,
        honor,
        ranks,
        codeChallenges
    } = data

    const isBrightMode = findInObj(options, 'bright_mode')

    const color = {
        bg: isBrightMode ? '#f5f5f5' : '#303133',
        fg: isBrightMode ? '#b3b3b3' : '#1D1D1F',
        stroke: isBrightMode ? '#b3b3b3' : '#020202',
        text: isBrightMode ? '#303133' : '#E8E8E8',
        secondaryTxt: '#AAAAAA',
        logo: isBrightMode ? '#f5f5f5' : '#B92F21'
    }

    const background = (fill) => {
        return `
            <g id="card">
            <rect 
            x="0" y="-30" 
            width="400" height="180" 
            rx="3" ry="3"
            fill="${fill}" />
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

    const progressBarRender = (currentKyu, userScore, color) => {
        const result = progressBar(currentKyu, userScore)
        const barLength = result.progressBarLenght
        const percentage = result.progressPercentage
        return `
        <line 
        fill="${color}" 
        stroke="${color}" 
        stroke-width="5"
        stroke-linecap="round"
        stroke-miterlimit="10" 
        x1="0" 
        y1="39.5" 
        x2="${barLength}" 
        y2="39.5"
        />
        ${textRender(20.5002, 35.5, '#AAAAAA', 13, (percentage === 'master' ? `score: ${userScore}` : `${percentage}%`))}
        `
    }

    const challengeRender = (challengeCompleted, challengeAuthored) => {
        const TEXT_A = 'Total completed:'
        const TEXT_B = 'Total authored:'
        return `
        <g id="challenges">
        ${textRender(17.5002, 66.5, color.secondaryTxt, 12, 'Challenges:')}
        ${textRender(15.5002, 84.7822, color.text, 14,
            `<tspan x="3.01" y="0">${TEXT_A}</tspan>
            <tspan x="115.198" y="0"> ${challengeCompleted}</tspan>`
        )}
      
        ${textRender(201.5002, 84.7822, color.text, 14, `
        <tspan x="0" y="0" >${TEXT_B}</tspan>
        <tspan x="103.257" y="0">${challengeAuthored}</tspan>
        `)}   
       
    </g>
        `
    }

    const progLangRender = (dataObj) => {
        return `
            ${textRender(18.5002, 105.5, color.secondaryTxt, 12, 'Top 3 languages:')}
            ${iconPLComponent(dataObj, color.text, color.secondaryTxt)}
     
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
            <style>
            #scale {
                color: #AAAAAA
            }
            </style>
         
            ${background(color.bg)}
            ${foreground(color.fg)}
            ${kyuLevelRender(0, -1, rankColor, kyuColor, logoRender(0, 0, kyuColor, logoSmall), ranks.overall.name)}
            ${nameRender(100.5002, -0.5, name, username, color.text, options)}
            ${textRender(307.3206, 5, color.text, 12, honor)}
            ${logoRender(0, 0, color.text, honorIcon)}
            ${logoRender(0, -19.15, color.logo, logoBig)}
            ${progressBarRender(ranks.overall.rank, ranks.overall.score, kyuColor)}
            ${challengeRender(codeChallenges.totalCompleted, codeChallenges.totalAuthored)}
            ${progLangRender(ranks)}
            </svg>
        `
    }

    return render()
}