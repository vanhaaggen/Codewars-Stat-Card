const { findInObj } = require('../utils/index')
const renderBadge = require('../views/renderBadge')
const renderCard = require('../views/renderCard')

/**
 * Checks for display mode queries.
 * 
 * @param {Object} data 
 * @param {Object} queries 
 * 
 * @returns {String} svg string
 */
module.exports = (data, queries) => {
    const hasBadgeQuery = findInObj(queries, 'badge')
    const hasCardQuery = findInObj(queries, 'card')

    if (!hasBadgeQuery && !hasCardQuery) throw new Error('Must add at least one type Badge/Card query')

    if (hasBadgeQuery) {
        return renderBadge(data, queries)
    } else if (hasCardQuery) {
        return renderCard(data, queries)
    }
}