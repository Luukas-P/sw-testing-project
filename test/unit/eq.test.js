import { expect } from 'chai';
import eq from '../../src/eq.js';

describe('eq.js Tests (Unit)', () => {
    
    it('should return true when object1 & object2 is the same string', () => {
        const result = eq("Strawberry","Strawberry");
        expect(result).to.equal(true);
    });

    it('should return true when object1 & object2 is the same number', () => {
        const result = eq(8,8);
        expect(result).to.equal(true);
    });

    it('should return true when object1 & object2 is the same float', () => {
        const result = eq(1.02,1.02);
        expect(result).to.equal(true);
    });

    it('should return true when object1 & object2 is the same char', () => {
        const result = eq(a,a);
        expect(result).to.equal(true);
    });

    it('should return true when object1 & object2 is Nan', () => {
        const result = eq(NaN,NaN);
        expect(result).to.equal(true);
    });

    it('should return false when object1 & object2 different strings', () => {
        const result = eq("Strawberry","Blueberry");
        expect(result).to.equal(false);
    });

    it('should return false when object1 is string & object2 is number', () => {
        const result = eq("Strawberry",2);
        expect(result).to.equal(false);
    });

    it('should return false when object1 & object2 is different numbers', () => {
        const result = eq(8,2);
        expect(result).to.equal(false);
    });

    it('should return false when object1 is string & object2 is number', () => {
        const result = eq("Strawberry",2);
        expect(result).to.equal(false);
    });


});