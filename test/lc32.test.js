var expect = require('chai').expect;
//test
var lc32 = require('../app/learning/leetcode32.js');

describe('leetcode32', function() {
	var _sContent = '())()()(())';
	it(_sContent, function() {
		// lc32.handleChange(_sContent).should.equal(6);
		expect(lc32.handleChange(_sContent)).to.be.equal(8);
	});
});