import { expect } from 'chai';
import isEmpty from '../../src/isEmpty.js';

describe('isEmpty.js Tests (Unit)', () => {
    
    it('should return true when param is null', () => {
        const result = isEmpty(null);
        expect(result).to.equal(true);
    });

    it('should return true when param is empty set', () => {
        const result = isEmpty([]);
        expect(result).to.equal(true);
    });

    it('should return true when param is empty map', () => {
        const result = isEmpty({});
        expect(result).to.equal(true);
    });

    it('should return true when param is true', () => {
        const result = isEmpty(true);
        expect(result).to.equal(true);
    });

    it('should return true when param is undefined', () => {
        const result = isEmpty(undefined);
        expect(result).to.equal(true);
    });

    it('should return true when param is NaN', () => {
        const result = isEmpty(NaN);
        expect(result).to.equal(true);
    });

    it('should return false when param is set with elements', () => {
        const result = isEmpty([1,2,3]);
        expect(result).to.equal(false);
    });

    it('should return false when param is map with elements', () => {
        const result = isEmpty({'a':1});
        expect(result).to.equal(false);
    });

    it('should return false when param is string', () => {
        const result = isEmpty(('abc'));
        expect(result).to.equal(false);
    });

});