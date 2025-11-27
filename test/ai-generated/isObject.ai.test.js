import { expect } from 'chai';
import isObject from '../../src/isObject.js';

describe('isObject (AI Generated)', () => {

    it('should return true for plain objects', () => {
        expect(isObject({})).to.be.true;
        expect(isObject({ a: 1 })).to.be.true;
    });

    it('should return true for arrays', () => {
        expect(isObject([1, 2, 3])).to.be.true;
        expect(isObject([])).to.be.true;
    });

    it('should return true for functions', () => {
        expect(isObject(() => {})).to.be.true;
        expect(isObject(function() {})).to.be.true;
        expect(isObject(Object)).to.be.true;
    });

    it('should return true for Regular Expressions', () => {
        expect(isObject(/abc/)).to.be.true;
        expect(isObject(new RegExp('abc'))).to.be.true;
    });

    it('should return true for Number objects (wrapper)', () => {
        expect(isObject(new Number(0))).to.be.true;
    });

    it('should return true for String objects (wrapper)', () => {
        expect(isObject(new String(''))).to.be.true;
    });

    it('should return true for Boolean objects (wrapper)', () => {
        expect(isObject(new Boolean(false))).to.be.true;
    });

    it('should return false for null', () => {
        // null is typeof 'object', but isObject should return false
        expect(isObject(null)).to.be.false;
    });

    it('should return false for undefined', () => {
        expect(isObject(undefined)).to.be.false;
    });

    it('should return false for primitive numbers', () => {
        expect(isObject(1)).to.be.false;
        expect(isObject(0)).to.be.false;
        expect(isObject(NaN)).to.be.false;
    });

    it('should return false for primitive strings', () => {
        expect(isObject('abc')).to.be.false;
        expect(isObject('')).to.be.false;
    });

    it('should return false for primitive booleans', () => {
        expect(isObject(true)).to.be.false;
        expect(isObject(false)).to.be.false;
    });

    it('should return false for symbols', () => {
        expect(isObject(Symbol('a'))).to.be.false;
    });

});