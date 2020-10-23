const getKyuColor = (color) => {
    switch (color) {
        case 'white':
            return '#EEEEEE';
        case 'yellow':
            return '#ECB613';
        case 'blue':
            return '#0077EE';
        case 'purple':
            return '#B500ED'

    }
}

const findInObj = (obj, string) => {
    const hasInObj = Object.keys(obj).findIndex(key => key === string)
    if (hasInObj !== -1) {
        return true
    } else {
        return false
    }
}



const SCORE = new Map()
SCORE.set(-8, 0)
SCORE.set(-7, 20)
SCORE.set(-6, 76)
SCORE.set(-5, 229)
SCORE.set(-4, 643)
SCORE.set(-3, 1768)
SCORE.set(-2, 4829)
SCORE.set(-1, 13147)
SCORE.set(1, 35759)
SCORE.set(2, 97225)


const progressBar = (currentKyu, userScore) => {
    const MAX_BAR_LENGHT = 400
    const isNegative = Math.sign(currentKyu) === -1 ? true : false
    const currentKyuRank = SCORE.get(currentKyu)
    let isMasterLevel = false
    let nextKyuRank

    if (isNegative && currentKyu !== -1 || !isNegative && currentKyu === 1) {
        nextKyuRank = SCORE.get(currentKyu + 1)

    } else if (currentKyu === -1) {
        nextKyuRank = SCORE.get(currentKyu + 2)

    } else if (!isNegative && currentKyu === 2) {
        isMasterLevel = true
    }

    const diffToNextRank = nextKyuRank - currentKyuRank

    const progressPercentage = !isMasterLevel ? ((userScore - currentKyuRank) * 100 / diffToNextRank).toFixed(1) : 'master'
    const progressBarLenght = !isMasterLevel ? (progressPercentage * 1) * MAX_BAR_LENGHT / 100 : 100

    return {
        progressPercentage,
        progressBarLenght
    }
}

module.exports = {
    getKyuColor,
    findInObj,
    progressBar,
    SCORE
}