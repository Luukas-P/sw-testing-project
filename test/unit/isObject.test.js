import { expect } from 'chai';
import isObject from '../../src/isObject.js';

describe('isObject.js Tests (Unit)', () => {
    
    it('should return true when param is empty map', () => {
        const result = isObject({});
        expect(result).to.equal(true);
    });

    it('should return true when param is empty set', () => {
        const result = isObject([]);
        expect(result).to.equal(true);
    });

    it('should return true when param is new string', () => {
        const result = isObject(new String(''));
        expect(result).to.equal(true);
    });

    it('should return true when param is new number', () => {
        const result = isObject(new Number(0));
        expect(result).to.equal(true);
    });

    it('should return true when param is RegEx', () => {
        const result = isObject(/Regex/);
        expect(result).to.equal(true);
    });

    it('should return true when param is map', () => {
        const result = isObject({a:1, b:2});
        expect(result).to.equal(true);
    });

    it('should return true when param is set', () => {
        const result = isObject([1,2,3]);
        expect(result).to.equal(true);
    });

    it('should return false when param is undefined', () => {
        const result = isObject(undefined);
        expect(result).to.equal(false);
    });

    it('should return false when param is undefined', () => {
        const result = isObject(NaN);
        expect(result).to.equal(false);
    });

    it('should return false when param is undefined', () => {
        const result = isObject(null);
        expect(result).to.equal(false);
    });

    it('should return false when param is string', () => {
        const result = isObject('string');
        expect(result).to.equal(false);
    });

    it('should return false when param is number', () => {
        const result = isObject(1);
        expect(result).to.equal(false);
    });

    it('should return false when param is boolean', () => {
        const result = isObject(true);
        expect(result).to.equal(false);
    });

});