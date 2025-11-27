import { expect } from 'chai';
import defaultTo from '../../src/defaultTo.js';

describe('defaultTo (AI Generated)', () => {
    
    it('should return the value if it is not null or undefined', () => {
        const result = defaultTo(1, 10);
        expect(result).to.equal(1);
    });

    it('should return the default value if value is undefined', () => {
        const result = defaultTo(undefined, 10);
        expect(result).to.equal(10);
    });

    it('should return the default value if value is null', () => {
        const result = defaultTo(null, 10);
        expect(result).to.equal(10);
    });

    it('should return the default value if value is NaN', () => {
        const result = defaultTo(NaN, 10);
        expect(result).to.equal(10); 
    });

    it('should preserve "falsy" values that are not null/undefined (like 0)', () => {
        const result = defaultTo(0, 10);
        expect(result).to.equal(0);
    });

    it('should preserve "falsy" values that are not null/undefined (like false)', () => {
        const result = defaultTo(false, 10);
        expect(result).to.equal(false);
    });

    it('should preserve "falsy" values that are not null/undefined (like empty string)', () => {
        const result = defaultTo('', 'default');
        expect(result).to.equal('');
    });

});