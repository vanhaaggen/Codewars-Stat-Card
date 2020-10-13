class Badge {
    constructor(darkmode) {
        this.darkmode = darkmode === "true" ? '#303133' : '#f5f5f5'
    }

    renderBackground() {

        return `
        <path fill="${this.darkmode}" stroke="#020202" stroke-miterlimit="10"
    d="M11.547,40L0,20L11.547,0h360.467v40H11.547z" />
        `
    }

    render() {

        return `
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px"
    y="0px" width="400px" height="40px" viewBox="0 0 400 40" style="enable-background:new 0 0 400 40">
    
    ${this.renderBackground()}

     </svg>
        `
    }
}

module.exports = Badge