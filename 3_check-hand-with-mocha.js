var checkHand = function (hand) {
    if (isTwoPair(hand)) {
        return 'two pair';
    } else if (isPair(hand)) {
        return 'pair';
    } else if (isFullHouse(hand)) {
        return 'full house';
    } else if (isTriple(hand)) {
        return 'three of a kind';
    } else if (isQuadruple(hand)) {
        return 'four of a kind';
    } else if (isStraightFlush(hand)) {
        return 'straight flush';
    } else if (isFlush(hand)) {
        return 'flush';
    } else if (isStraight(hand)) {
        return 'straight';
    } else {
        return 'high card';
    }
};

function isPair (hand) {
    return multiplesIn(hand) === 2;
};

function highestCount (values) {
    var counts = {};

    values.forEach(function (value, index) {
        counts[value] = 0;
        if (value == values[0]) {
            counts[value] = counts[value] + 1;
        };
        if (value == values[1]) {
            counts[value] = counts[value] + 1;
        };
        if (value == values[2]) {
            counts[value] = counts[value] + 1;
        };
        if (value == values[3]) {
            counts[value] = counts[value] + 1;
        };
        if (value == values[4]) {
            counts[value] = counts[value] + 1;
        };
    });

    var totalCounts = Object.keys(counts).map(function (key) {
        return counts[key];
    });

    return totalCounts.sort(function (a, b) {
        return b - a;
    })[0];
};

function valuesFromHand (hand) {
    return hand.map(function (card) {
        return card.split('-')[0];
    });
};

function multiplesIn (hand) {
    return highestCount(valuesFromHand(hand));
};

function isTriple (hand) {
    return multiplesIn(hand) === 3;
};

function isQuadruple (hand) {
    return multiplesIn(hand) === 4;
}

function isFlush (hand) {
    return allTheSameSuit(suitsFor(hand));
}

function allTheSameSuit (suits) {
    var toReturn = true;

    suits.forEach(function (suit) {
        if (suit !== suits[0]) {
            toReturn = false;
        }
    });
    return toReturn;
};

function suitsFor (hand) {
    return hand.map(function (card) {
        return card.split('-')[1];
    });
};
function cardsInsequence (values) {
    var sortedValue = values.sort();
    return fourAway(sortedValue) && noMutiples(values);
};

function isStraight (hand) {
    return cardsInsequence(valuesFromHand(hand));
};

function fourAway (values) {
    return ((+values[values.length - 1] - 4 - +values[0]) === 0);
};

function noMutiples (values) {
    return highestCount(values) == 1;
};

function isStraightFlush (hand) {
    return isStraight(hand) && isFlush(hand);
};

function allCounts (values) {
    var counts = {};

    values.forEach(function (value, index) {
        counts[value] = 0;
        if (value == values[0]) {
            counts[value] = counts[value] + 1;
        };
        if (value == values[1]) {
            counts[value] = counts[value] + 1;
        };
        if (value == values[2]) {
            counts[value] = counts[value] + 1;
        };
        if (value == values[3]) {
            counts[value] = counts[value] + 1;
        };
        if (value == values[4]) {
            counts[value] = counts[value] + 1;
        };
    });

    var totalCounts = Object.keys(counts).map(function (key) {
        return counts[key];
    });

    return totalCounts.sort(function (a, b) {
        return b - a;
    });
};

function isFullHouse (hand) {
    var theCounts = allCounts(valuesFromHand(hand));
    return (theCounts[0] === 3 && theCounts[1] === 2);
};

function isTwoPair (hand) {
    var testCounts = allCounts(valuesFromHand(hand));
    return (testCounts[0] === 2 && testCounts[1] === 2);
};

module.exports = {
    checkHand: checkHand,
    isPair: isPair,
    highestCount: highestCount,
    valuesFromHand: valuesFromHand,
    multiplesIn: multiplesIn,
    allTheSameSuit: allTheSameSuit,
    suitsFor: suitsFor,
    fourAway: fourAway,
    noMutiples: noMutiples
}
