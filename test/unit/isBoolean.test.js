import { expect } from 'chai';
import isBoolean from '../../src/isBoolean.js';

describe('isBoolean.js Tests (Unit)', () => {

    it('Function return true when param is boolean (true)', () => {
        const result = isBoolean(true);
        expect(result).to.equal(true);
    });

    it('Function return true when param is boolean (false)', () => {
        const result = isBoolean(false);
        expect(result).to.equal(true);
    });

    it('Function return false when param is string', () => {
        const result = isBoolean("string");
        expect(result).to.equal(false);
    });

    it('Function return false when param is NaN', () => {
        const result = isBoolean(NaN);
        expect(result).to.equal(false);
    });

    it('Function return false when param is undefined', () => {
        const result = isBoolean(undefined);
        expect(result).to.equal(false);
    });

    it('Function return false when param is null', () => {
        const result = isBoolean(null);
        expect(result).to.equal(false);
    });

    it('Function return false when param is number', () => {
        const result = isBoolean(8);
        expect(result).to.equal(false);
    });


});