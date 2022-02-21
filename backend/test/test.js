const expect = require("chai").expect;

//Dummy test
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            expect([1,2,3].indexOf(4)).to.equal(-1);
        });
    });
});

//Dummy test
describe('Main', function () {
    describe('main load', function () {
        it('should run without error', function () {
            expect(() => {}).not.to.throw();
        });
    });
});