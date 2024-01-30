import seedrandom from 'seedrandom';

const cardAttributes = {
    1: {
        color: "red",
        shape: "squiggle",
        fill: "solid",
        number: "1",
    },
    2: {
        color: "red",
        shape: "squiggle",
        fill: "solid",
        number: "2",
    },
    3: {
        color: "red",
        shape: "squiggle",
        fill: "solid",
        number: "3",
    },
    4: {
        color: "purple",
        shape: "squiggle",
        fill: "solid",
        number: "1",
    },
    5: {
        color: "purple",
        shape: "squiggle",
        fill: "solid",
        number: "2",
    },
    6: {
        color: "purple",
        shape: "squiggle",
        fill: "solid",
        number: "3",
    },
    7: {
        color: "green",
        shape: "squiggle",
        fill: "solid",
        number: "1",
    },
    8: {
        color: "green",
        shape: "squiggle",
        fill: "solid",
        number: "2",
    },
    9: {
        color: "green",
        shape: "squiggle",
        fill: "solid",
        number: "3",
    },
    10: {
        color: "red",
        shape: "diamond",
        fill: "solid",
        number: "1",
    },
    11: {
        color: "red",
        shape: "diamond",
        fill: "solid",
        number: "2",
    },
    12: {
        color: "red",
        shape: "diamond",
        fill: "solid",
        number: "3",
    },
    13: {
        color: "purple",
        shape: "diamond",
        fill: "solid",
        number: "1",
    },
    14: {
        color: "purple",
        shape: "diamond",
        fill: "solid",
        number: "2",
    },
    15: {
        color: "purple",
        shape: "diamond",
        fill: "solid",
        number: "3",
    },
    16: {
        color: "green",
        shape: "diamond",
        fill: "solid",
        number: "1",
    },
    17: {
        color: "green",
        shape: "diamond",
        fill: "solid",
        number: "2",
    },
    18: {
        color: "green",
        shape: "diamond",
        fill: "solid",
        number: "3",
    },
    19: {
        color: "red",
        shape: "oval",
        fill: "solid",
        number: "1",
    },
    20: {
        color: "red",
        shape: "oval",
        fill: "solid",
        number: "2",
    },
    21: {
        color: "red",
        shape: "oval",
        fill: "solid",
        number: "3",
    },
    22: {
        color: "purple",
        shape: "oval",
        fill: "solid",
        number: "1",
    },
    23: {
        color: "purple",
        shape: "oval",
        fill: "solid",
        number: "2",
    },
    24: {
        color: "purple",
        shape: "oval",
        fill: "solid",
        number: "3",
    },
    25: {
        color: "green",
        shape: "oval",
        fill: "solid",
        number: "1",
    },
    26: {
        color: "green",
        shape: "oval",
        fill: "solid",
        number: "2",
    },
    27: {
        color: "green",
        shape: "oval",
        fill: "solid",
        number: "3",
    },
    28: {
        color: "red",
        shape: "squiggle",
        fill: "striped",
        number: "1",
    },
    29: {
        color: "red",
        shape: "squiggle",
        fill: "striped",
        number: "2",
    },
    30: {
        color: "red",
        shape: "squiggle",
        fill: "striped",
        number: "3",
    },
    31: {
        color: "purple",
        shape: "squiggle",
        fill: "striped",
        number: "1",
    },
    32: {
        color: "purple",
        shape: "squiggle",
        fill: "striped",
        number: "2",
    },
    33: {
        color: "purple",
        shape: "squiggle",
        fill: "striped",
        number: "3",
    },
    34: {
        color: "green",
        shape: "squiggle",
        fill: "striped",
        number: "1",
    },
    35: {
        color: "green",
        shape: "squiggle",
        fill: "striped",
        number: "2",
    },
    36: {
        color: "green",
        shape: "squiggle",
        fill: "striped",
        number: "3",
    },
    37: {
        color: "red",
        shape: "diamond",
        fill: "striped",
        number: "1",
    },
    38: {
        color: "red",
        shape: "diamond",
        fill: "striped",
        number: "2",
    },
    39: {
        color: "red",
        shape: "diamond",
        fill: "striped",
        number: "3",
    },
    40: {
        color: "purple",
        shape: "diamond",
        fill: "striped",
        number: "1",
    },
    41: {
        color: "purple",
        shape: "diamond",
        fill: "striped",
        number: "2",
    },
    42: {
        color: "purple",
        shape: "diamond",
        fill: "striped",
        number: "3",
    },
    43: {
        color: "green",
        shape: "diamond",
        fill: "striped",
        number: "1",
    },
    44: {
        color: "green",
        shape: "diamond",
        fill: "striped",
        number: "2",
    },
    45: {
        color: "green",
        shape: "diamond",
        fill: "striped",
        number: "3",
    },
    46: {
        color: "red",
        shape: "oval",
        fill: "striped",
        number: "1",
    },
    47: {
        color: "red",
        shape: "oval",
        fill: "striped",
        number: "2",
    },
    48: {
        color: "red",
        shape: "oval",
        fill: "striped",
        number: "3",
    },
    49: {
        color: "purple",
        shape: "oval",
        fill: "striped",
        number: "1",
    },
    50: {
        color: "purple",
        shape: "oval",
        fill: "striped",
        number: "2",
    },
    51: {
        color: "purple",
        shape: "oval",
        fill: "striped",
        number: "3",
    },
    52: {
        color: "green",
        shape: "oval",
        fill: "striped",
        number: "1",
    },
    53: {
        color: "green",
        shape: "oval",
        fill: "striped",
        number: "2",
    },
    54: {
        color: "green",
        shape: "oval",
        fill: "striped",
        number: "3",
    },
    55: {
        color: "red",
        shape: "squiggle",
        fill: "open",
        number: "1",
    },
    56: {
        color: "red",
        shape: "squiggle",
        fill: "open",
        number: "2",
    },
    57: {
        color: "red",
        shape: "squiggle",
        fill: "open",
        number: "3",
    },
    58: {
        color: "purple",
        shape: "squiggle",
        fill: "open",
        number: "1",
    },
    59: {
        color: "purple",
        shape: "squiggle",
        fill: "open",
        number: "2",
    },
    60: {
        color: "purple",
        shape: "squiggle",
        fill: "open",
        number: "3",
    },
    61: {
        color: "green",
        shape: "squiggle",
        fill: "open",
        number: "1",
    },
    62: {
        color: "green",
        shape: "squiggle",
        fill: "open",
        number: "2",
    },
    63: {
        color: "green",
        shape: "squiggle",
        fill: "open",
        number: "3",
    },
    64: {
        color: "red",
        shape: "diamond",
        fill: "open",
        number: "1",
    },
    65: {
        color: "red",
        shape: "diamond",
        fill: "open",
        number: "2",
    },
    66: {
        color: "red",
        shape: "diamond",
        fill: "open",
        number: "3",
    },
    67: {
        color: "purple",
        shape: "diamond",
        fill: "open",
        number: "1",
    },
    68: {
        color: "purple",
        shape: "diamond",
        fill: "open",
        number: "2",
    },
    69: {
        color: "purple",
        shape: "diamond",
        fill: "open",
        number: "3",
    },
    70: {
        color: "green",
        shape: "diamond",
        fill: "open",
        number: "1",
    },
    71: {
        color: "green",
        shape: "diamond",
        fill: "open",
        number: "2",
    },
    72: {
        color: "green",
        shape: "diamond",
        fill: "open",
        number: "3",
    },
    73: {
        color: "red",
        shape: "oval",
        fill: "open",
        number: "1",
    },
    74: {
        color: "red",
        shape: "oval",
        fill: "open",
        number: "2",
    },
    75: {
        color: "red",
        shape: "oval",
        fill: "open",
        number: "3",
    },
    76: {
        color: "purple",
        shape: "oval",
        fill: "open",
        number: "1",
    },
    77: {
        color: "purple",
        shape: "oval",
        fill: "open",
        number: "2",
    },
    78: {
        color: "purple",
        shape: "oval",
        fill: "open",
        number: "3",
    },
    79: {
        color: "green",
        shape: "oval",
        fill: "open",
        number: "1",
    },
    80: {
        color: "green",
        shape: "oval",
        fill: "open",
        number: "2",
    },
    81: {
        color: "green",
        shape: "oval",
        fill: "open",
        number: "3",
    },
};

// isSet function
function isSet(card1, card2, card3) {
    const colorSet = new Set([card1.color, card2.color, card3.color]);
    const shapeSet = new Set([card1.shape, card2.shape, card3.shape]);
    const fillSet = new Set([card1.fill, card2.fill, card3.fill]);
    const numberSet = new Set([card1.number, card2.number, card3.number]);

    return !(
        (colorSet.size === 2) ||
        (shapeSet.size === 2) ||
        (fillSet.size === 2) ||
        (numberSet.size === 2)
    );
}

// getRandomDeck function
// returns a deck of size deckSize with random, unique numbers from 1 to deckSize
function getRandomDeck(deckSize, seed) {
    console.log("seed ", seed)
    let cardNumsArr = [];
    for (let i = 1; i <= deckSize; i++) {
        cardNumsArr.push(i);
    }
    const rng = seed ? seedrandom(seed) : Math.random;

    let deckNums = [];
    for (let i = 0; i < deckSize; i++) {
        
        const randomNum = Math.floor(rng() * cardNumsArr.length);
        deckNums.push(cardNumsArr[randomNum]);
        cardNumsArr.splice(randomNum, 1);
    }

    return deckNums;
}

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};


export { isSet, getRandomDeck, cardAttributes, generateRandomString };