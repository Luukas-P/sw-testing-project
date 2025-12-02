import { expect } from 'chai';
import isEmpty from '../../src/isEmpty.js';

describe('isEmpty.js Tests (Unit)', () => {
    
    it('should return true when object is null', () => {
        const result = isEmpty(null);
        expect(result).to.equal(true);
    });

    it('should return true when object is empty set', () => {
        const result = isEmpty([]);
        expect(result).to.equal(true);
    });

    it('should return true when object is empty map', () => {
        const result = isEmpty({});
        expect(result).to.equal(true);
    });

    it('should return true when object is true', () => {
        const result = isEmpty(true);
        expect(result).to.equal(true);
    });

    it('should return true when object is undefined', () => {
        const result = isEmpty(undefined);
        expect(result).to.equal(true);
    });

    it('should return true when object is NaN', () => {
        const result = isEmpty(NaN);
        expect(result).to.equal(true);
    });

    it('should return false when object is set with elements', () => {
        const result = isEmpty([1,2,3]);
        expect(result).to.equal(false);
    });

    it('should return false when object is map with elements', () => {
        const result = isEmpty({'a':1});
        expect(result).to.equal(false);
    });

    it('should return false when object is string', () => {
        const result = isEmpty(('abc'));
        expect(result).to.equal(false);
    });

});