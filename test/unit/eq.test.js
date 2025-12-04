import { expect } from 'chai';
import eq from '../../src/eq.js';

describe('eq.js Tests (Unit)', () => {
    
    it('should return true when param1 & param2 is the same string', () => {
        const result = eq("Strawberry","Strawberry");
        expect(result).to.equal(true);
    });

    it('should return true when param1 & param2 is the same number', () => {
        const result = eq(8,8);
        expect(result).to.equal(true);
    });

    it('should return true when param1 & param2 is the same float', () => {
        const result = eq(1.02,1.02);
        expect(result).to.equal(true);
    });

    it('should return true when param1 & param2 is Nan', () => {
        const result = eq(NaN,NaN);
        expect(result).to.equal(true);
    });

    it('should return false when param1 & param2 different strings', () => {
        const result = eq("Strawberry","Blueberry");
        expect(result).to.equal(false);
    });

    it('should return false when param1 is string & param2 is number', () => {
        const result = eq("Strawberry",2);
        expect(result).to.equal(false);
    });

    it('should return false when param1 & param2 is different numbers', () => {
        const result = eq(8,2);
        expect(result).to.equal(false);
    });

    it('should return false when param1 is string & param2 is number', () => {
        const result = eq("Strawberry",2);
        expect(result).to.equal(false);
    });

    it('should return false when param1 is string resembling number & param2 is the number', () => {
        const result = eq("2",2);
        expect(result).to.equal(false);
    });


});