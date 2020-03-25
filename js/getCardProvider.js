const getCardProvider = (cardNumber) => {
    if (isCardNumberValid(cardNumber)) {
        return getProvider(cardNumber)
    } else {
        return 'Incorrect number'
    }
}


function isCardNumberValid(cardNumber) {
    const parityChecker = parity(cardNumber);

    const oddNumber = parityChecker
        .filter((_, index) => index % 2 === 0)

    const evenNumber = parityChecker
        .filter((_, index) => index % 2 === 1)

    const sumOddNumber = oddNumber
        .map(n => (n * 2).toString())
        .reduce((curr, next) => {
            return curr + Number(next[0]) + (next[1] ? Number(next[1]) : 0)
        }, 0)


    const sumEvenNumber = evenNumber.reduce((curr, next) => curr + next, 0)

    return (sumOddNumber + sumEvenNumber) % 10 === 0;
}

function parity(cardNumber) {
    return cardNumber.toString().length % 2 === 0 ? [...cardNumber.toString()].map(n => Number(n)) : [0, ...cardNumber.toString()].map(n => Number(n))
}


function getProvider(cardNumber) {
    const cardNumberString = cardNumber.toString()
    if (isVisa(cardNumberString)) {
        return 'Visa'
    } else if (isMasterCard(cardNumberString)) {
        return 'MasterCard'
    } else if (isAmericanExpress(cardNumberString)) {
        return 'American Express'
    } else if (isJcb(cardNumberString)) {
        return 'JCB'
    } else if (isDiscover(cardNumberString)) {
        return 'Discover'
    } else {
        throw new Error('Cannot recognize card provider')
    }
}


function isVisa(cardNumberString) {
    const islength = cardNumberString.length === 16;
    const isPrefix = cardNumberString.startsWith('4');
    return islength && isPrefix
}

function isMasterCard(cardNumberString) {
    const islength = cardNumberString.length === 13 || cardNumberString.length === 16;
    const isPrefix = ['51', '52', '53', '54', '55'].includes(cardNumberString.substring(0, 2))
    return islength && isPrefix
}

function isAmericanExpress(cardNumberString) {
    const islength = cardNumberString.length === 15;
    const isPrefix = ['34', '37'].includes(cardNumberString.substring(0, 2))
    return islength && isPrefix
}
function isJcb(cardNumberString) {
    const islength = cardNumberString.length === 16;
    const isPrefix = cardNumberString.startsWith('35')
    return islength && isPrefix
}
function isDiscover(cardNumberString) {
    const islength = cardNumberString.length === 16;
    const isPrefix = cardNumberString.startsWith('60')
    return islength && isPrefix
}


export default getCardProvider;

