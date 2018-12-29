var checkHand = function (hand) {
    if (isPair(hand)) {
        return 'pair';
    } else {
        return 'three of a kind';
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


module.exports = {
    checkHand: checkHand,
    isPair: isPair,
    highestCount: highestCount,
    valuesFromHand: valuesFromHand,
    multiplesIn: multiplesIn,
}
