const { findInObj } = require('../utils/index')
const renderBadge = require('../views/renderBadge')
const renderCard = require('../views/renderCard')

module.exports = (data, queries) => {
    const hasBadgeQuery = findInObj(queries, 'badge')
    const hasCardQuery = findInObj(queries, 'card')

    if (!hasBadgeQuery && !hasCardQuery) throw new Error('Must add at least one type Badge/Card query')

    if (hasBadgeQuery && !hasCardQuery) {
        return renderBadge(data, queries)
    } else if (hasCardQuery && !hasBadgeQuery) {
        return renderCard(data, queries)
    }
}