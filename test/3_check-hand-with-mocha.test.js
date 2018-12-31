var testModule = require('../3_check-hand-with-mocha.js');
var wish = require('wish');
var deepEqual = require('deep-equal');

describe('valueFromhHand()', function () {
    it('只從手排中返回點數', function () {
        var result = testModule.valuesFromHand(['2-H', '3-C', '4-D', '5-H', '2-C']);
        wish(deepEqual(result, ['2', '3', '4', '5', '2']));
    });
});

describe('highestCount()', function () {
    it('返回陣列中同點數手排的最大張數', function () {
        var result = testModule.highestCount(['2', '4', '4', '4', '2']);
        wish(result === 3);
    });
});

describe('mutiplesIn()', function () {
    it('找到一組重複的點數', function () {
        var result = testModule.multiplesIn(['2-H', '3-C', '4-D', '5-H', '2-C']);
        wish(result === 2);
    });
});

describe('isPair()', function () {
    it('找到一組對子', function () {
        var result = testModule.isPair(['2-H', '3-C', '4-D', '5-H', '2-C']);
        wish(result);
    })
});
describe('checkHand()', function () {
    it('處理對子', function () {
        var result = testModule.checkHand(['2-H', '3-C', '4-D', '5-H', '2-C']);
        wish(result === 'pair');
        var anotherResult = testModule.checkHand(['3-H', '3-C', '4-D', '5-H', '2-C']);
        wish(anotherResult === 'pair');
    });

    it('處理三條', function () {
        var result = testModule.checkHand(['3-H', '3-C', '3-D', '5-H', '2-H']);
        wish(result === 'three of a kind');
    });

    it('處理四條', function () {
        var result = testModule.checkHand(['3-H', '3-C', '3-D', '3-S', '2-H']);
        wish(result === 'four of a kind');
    });

    it('處理高排', function () {
        var result = testModule.checkHand(['2-H', '5-C', '9-D', '7-S', '3-H']);
        wish(result === 'high card');
    });
});