const textRender = (x, y, fontColor, fontSize, data, fontFamily, fontStyle) => {
    const fntFamily = fontFamily || 'Arial'
    const fntStyle = fontStyle || 'normal'
    return `
        <text transform="matrix(1 0 0 1 ${x} ${y})"
        fill="${fontColor}"
        font-family="${fntFamily}"
        font-style="${fntStyle}"
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

const kyuPoligonRender = (x, y, rankColor, kyuColor, logo) => {
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
        
        ${logo}

    </g>
    `
}

module.exports = {
    textRender,
    logoRender,
    kyuPoligonRender
}