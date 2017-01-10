var expect = require('chai').expect;
//test

// var lc32 = require('../app/learning/leetcode32.js');
// describe('leetcode32', function() {
// 	var _sContent = '())()()(())';
// 	it(_sContent, function() {
// 		// lc32.handleChange(_sContent).should.equal(6);
// 		expect(lc32.handleChange(_sContent)).to.be.equal(8);
// 	});
// });

// var lc26 = require('../app/learning/leetcode26.js');
// describe('leetcode26', function() {
// 	var _sContent = [1,3,3,2,1,64,3,10];
// 	var describeContent = 'remove Duplicates from a sort array' + _sContent.toString();
// 	it(describeContent, function() {
// 		// lc32.handleChange(_sContent).should.equal(6);
// 		expect(lc26.removeDuplicates(_sContent)).to.be.equal(5);
// 	});
// });
var num = 453;
var lc = require('../app/learning/leetcode'+num+'.js');
var sContent = [2,4,6,7,7];
var sResult = 16;
describe('leetcode'+num, function() {
	var describeContent = 'leetcode'+num+' test';
	it(describeContent, function() {
		expect(lc.mackArrayEqual(sContent)).to.be.equal(sResult);
	});
});