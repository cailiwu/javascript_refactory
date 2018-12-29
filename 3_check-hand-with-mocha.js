var wish = require('wish');

var checkHand = function (hand) {
    if (isPair(hand)) {
        return 'pair';
    } else {
        return 'three of a kind';
    }
};
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