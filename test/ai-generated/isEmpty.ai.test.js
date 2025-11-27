import { expect } from 'chai';
import isEmpty from '../../src/isEmpty.js';

describe('isEmpty (AI Generated)', () => {

    it('should return true for null', () => {
        expect(isEmpty(null)).to.be.true;
    });

    it('should return true for undefined', () => {
        expect(isEmpty(undefined)).to.be.true;
    });

    it('should return true for booleans', () => {
        expect(isEmpty(true)).to.be.true;
        expect(isEmpty(false)).to.be.true;
    });

    it('should return true for numbers', () => {
        expect(isEmpty(1)).to.be.true;
        expect(isEmpty(0)).to.be.true;
        expect(isEmpty(NaN)).to.be.true;
    });

    it('should return true for empty strings', () => {
        expect(isEmpty('')).to.be.true;
    });

    it('should return false for non-empty strings', () => {
        expect(isEmpty('abc')).to.be.false;
    });

    it('should return true for empty arrays', () => {
        expect(isEmpty([])).to.be.true;
    });

    it('should return false for non-empty arrays', () => {
        expect(isEmpty([1, 2, 3])).to.be.false;
    });

    it('should return true for empty objects', () => {
        expect(isEmpty({})).to.be.true;
    });

    it('should return false for objects with own enumerable properties', () => {
        expect(isEmpty({ 'a': 1 })).to.be.false;
    });

    it('should return true for objects with only symbol properties', () => {
        // for...in loops do not iterate over symbols
        const symbolObj = { [Symbol('a')]: 1 };
        expect(isEmpty(symbolObj)).to.be.true;
    });

    it('should return true for empty Maps', () => {
        expect(isEmpty(new Map())).to.be.true;
    });

    it('should return false for non-empty Maps', () => {
        const map = new Map();
        map.set('a', 1);
        expect(isEmpty(map)).to.be.false;
    });

    it('should return true for empty Sets', () => {
        expect(isEmpty(new Set())).to.be.true;
    });

    it('should return false for non-empty Sets', () => {
        const set = new Set();
        set.add(1);
        expect(isEmpty(set)).to.be.false;
    });

    it('should return true for object prototypes', () => {
        // isEmpty checks for own properties. Prototypes usually have methods but no "own" data usually unless added.
        expect(isEmpty(Object.prototype)).to.be.true;
    });

    it('should treat array-like objects with length 0 as empty', () => {
        const arrayLike = { length: 0, splice: () => {} };
        expect(isEmpty(arrayLike)).to.be.true;
    });

    it('should treat array-like objects with length > 0 as not empty', () => {
        const arrayLike = { length: 1, splice: () => {} };
        expect(isEmpty(arrayLike)).to.be.false;
    });

    it('should handle Buffers (if available in environment)', () => {
        if (typeof Buffer !== 'undefined') {
            expect(isEmpty(Buffer.alloc(0))).to.be.true;
            expect(isEmpty(Buffer.from('a'))).to.be.false;
        }
    });

});