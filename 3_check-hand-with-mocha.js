var wish = require('wish');
var deepEqual = require('deep-equal');

var checkHand = function (hand) {
    if (isPair(hand)) {
        return 'pair';
    } else {
        return 'three of a kind';
    }
};
function isPair () {
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
    return totalCounts.sort(function (a, b) { return b - a })[0];
};
function valuesFromHand (hand) {
    return hand.map(function (card) {
        return card.split('-')[0];
    });
};
function multiplesIn (hand) {
    return highestCount(valuesFromHand(hand));
};
describe('valueFromhHand()', function () {
    it('只從手排中返回點數', function () {
        var result = valuesFromHand(['2-H', '3-C', '4-D', '5-H', '2-C']);
        wish(deepEqual(result, ['2', '3', '4', '5', '2']));
    });
});
describe('highestCount()', function () {
    it('返回陣列中同點數手排的最大張數', function () {
        var result = highestCount(['2', '4', '4', '4', '2']);
        wish(result === 3);
    });
});
describe('mutiplesIn()', function () {
    it('找到一組重複的點數', function () {
        var result = multiplesIn(['2-H', '3-C', '4-D', '5-H', '2-C']);
        wish(result === 2)
    });
});
describe('isPair()', function () {
    it('找到一組對子', function () {
        var result = isPair(['2-H', '3-C', '4-D', '5-H', '2-C']);
        wish(result)
    })
});
describe('checkHand()', function () {
    it('處理對子', function () {
        var result = checkHand(['2-H', '3-C', '4-D', '5-H', '2-C']);
        wish(result === 'pair');
        var anotherResult = checkHand(['3-H', '3-C', '4-D', '5-H', '2-C']);
        wish(anotherResult === 'pair');
    });
    it('處理三條', function () {
        var result = checkHand(['3-H', '3-C', '3-D', '5-H', '2-H']);
        wish(result === 'three of a kind');
    });
});
