import { expect } from 'chai';
import toNumber from '../../src/toNumber.js';

describe('toNumber.js Tests (Unit)', () => {
    
    it('Should return the given float', () => {
        const result = toNumber(1.02);
        expect(result).to.equal(1.02);
    });

    it('Should return the number of the string', () => {
        const result = toNumber("1.02");
        expect(result).to.equal(1.02);
    });

    it('should return zero', () => {
        const result = toNumber(0);
        expect(result).to.equal(0);
    });

    it('should return number when given boolean', () => {
        const result = toNumber(true);
        expect(result).to.equal(1);
    });

    it('should return infinity when given infinity', () => {
        const result = toNumber(Infinity);
        expect(result).to.equal(Infinity);
    });

    it('minimum should return "5e-324"', function(){
        const result = toNumber(Number.MIN_VALUE)
        expect(result).to.equal(5e-324)
    });

    it('random string should return NaN', function(){
        var isnan = Number.isNaN(toNumber('abc'))
        expect(isnan)
    });

    it('symbol should return NaN', function(){
        var isnan = Number.isNaN(toNumber(Symbol('abc')))
        expect(isnan)
    });

    it('should clear leading and trailing whitespaces', function(){
        const result = toNumber(   123 )
        expect(result).to.equal(123)
    });

    it('should return number from binary string', function(){
        const result = toNumber("0b01010101")
        expect(result).to.equal(85)
    });

    it('should return number from hexadecimal strings', function(){
        const result = toNumber("0x55")
        expect(result).to.equal(85)
    });
    
    it('should return NaN from bad hexadecimal strings', function(){
        var isnan = Number.isNaN(expect(toNumber("0x55g")))
        expect(isnan)
    });

    it('should return number from octal string', function(){
        expect(toNumber("0o125")).to.equal(85)
    });




})