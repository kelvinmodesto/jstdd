var expect = require('chai').expect;
describe('Main', () => {
	var arr;

	beforeEach( () => {
		console.log("beforeEach")
		arr = [1, 2, 3];
	});

	it('it should be an array',()=>{
		expect(arr).to.be.an('array');
	});

	it('Should have a size of 4 when push another value to the array',() => {
		arr.push(4);
		expect(arr).to.have.lengthOf(4)
	});

	it('Should have a size of 2 when pop a value to the array',() => {
		arr.pop();
		console.log(arr.length);
	});

	it('should return true when pop 3 an array',() => {
		expect(arr.pop() ===3).to.be.true;
	});

	it('Should remove 3 when use pop the array',() => {
		console.log(arr.pop() === 3);
		expect(arr).to.not.include(3);
	});
});
