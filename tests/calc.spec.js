import {expect} from 'chai';
import {sum,sub,mult,div} from '../src/calc.js';
describe('Calc', () => {
	//smole tests
	describe('Smoke Tests',()=>{


		it("should exists the method `sum`",()=>{
			expect(sum).to.exist;
		});

		it("should exists the method `sub`",()=>{
			expect(sub).to.exist;
		});

		it("should exists the method `mult`",()=>{
			expect(mult).to.exist;
		});

		it("should exists the calc `div`",()=>{
			expect(div).to.exist;
		});

	});

	describe('Sum',()=>{
		it('should return 4 when sum 2 and 2',() =>{
			expect(sum(2,2)).to.be.equal(4);
		});
	});

	describe('Sub',()=>{
		it('should return 4 when sub 6 and 2',() =>{
			expect(sub(6,2)).to.be.equal(4);
		});

		it('should return -4 when sub 6 and 10',() =>{
			expect(sub(6,10)).to.be.equal(-4);
		});
	});

	describe('Mult',()=>{
		it('should return -4 when mult 2 and 2',() =>{
			expect(mult(2,2)).to.be.equal(4);
		});
	});

	describe('Div',()=>{
		it('should return 2 when div 4 and 2',() =>{
			expect(div(4,2)).to.be.equal(2);
		});

		it('should return `divisão por zero` where divide by zero',() =>{
			expect(div(4,0)).to.be.equal('divisão por zero');
		});
	});
});
