const Badge = require('./Badge')

const renderBadge = (data, options) => {
    const {
        username,
        name,
        honor,
        clan,
        skills,

    } = data

    const {
        dark_mode,
    } = options
    console.log(dark_mode)
    const myBadge = new Badge(dark_mode)
    return myBadge.render()

}

module.exports = renderBadge