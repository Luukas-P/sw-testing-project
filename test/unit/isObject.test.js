import { expect } from 'chai';
import isObject from '../../src/isObject.js';

describe('isObject.js Tests (Unit)', () => {
    
    it('should return true when object is empty map', () => {
        const result = isObject({});
        expect(result).to.equal(true);
    });

    it('should return true when object is empty set', () => {
        const result = isObject([]);
        expect(result).to.equal(true);
    });

    it('should return true when object is new string', () => {
        const result = isObject(new String(''));
        expect(result).to.equal(true);
    });

    it('should return true when object is new number', () => {
        const result = isObject(new Number(0));
        expect(result).to.equal(true);
    });

    it('should return true when object is RegEx', () => {
        const result = isObject(/Regex/);
        expect(result).to.equal(true);
    });

    it('should return true when object is map', () => {
        const result = isObject({a:1, b:2});
        expect(result).to.equal(true);
    });

    it('should return true when object is set', () => {
        const result = isObject([1,2,3]);
        expect(result).to.equal(true);
    });

    it('should return false when object is undefined', () => {
        const result = isObject(undefined);
        expect(result).to.equal(false);
    });

    it('should return false when object is undefined', () => {
        const result = isObject(NaN);
        expect(result).to.equal(false);
    });

    it('should return false when object is undefined', () => {
        const result = isObject(null);
        expect(result).to.equal(false);
    });

    it('should return false when object is string', () => {
        const result = isObject('string');
        expect(result).to.equal(false);
    });

    it('should return false when object is number', () => {
        const result = isObject(1);
        expect(result).to.equal(false);
    });

    it('should return false when object is boolean', () => {
        const result = isObject(true);
        expect(result).to.equal(false);
    });

});