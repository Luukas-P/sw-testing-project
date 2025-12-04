import { expect } from 'chai';
import defaultTo from '../../src/defaultTo.js';

describe('defaultTo.js Tests (Unit)', () => {
    
    it('Function should return the number (parameter1) when its defined', () => {
        const result = defaultTo(1,5);
        expect(result).to.equal(1);
    });

    it('Function should return the string (parameter1) when its defined', () => {
        const result = defaultTo("Good quality","Neutral");
        expect(result).to.equal("Good quality");
    });

    it('Function should return the negative number (parameter1) when its defined', () => {
        const result = defaultTo(-1,5);
        expect(result).to.equal(-1);
    });

    it('Function should return string (parameter1) even if the default value is number', () => {
        const result = defaultTo("string",5);
        expect(result).to.equal("string");
    });

    it('Function should return the default value (parameter2) when parameter1 is undefined', () => {
        const result = defaultTo(undefined,5);
        expect(result).to.equal(5);
    });

    it('Function should return the default value (parameter2) when parameter1 is NaN', () => {
        const result = defaultTo(NaN,5);
        expect(result).to.equal(5);
    });

    it('Function should return the default value (parameter2) when parameter1 is null', () => {
        const result = defaultTo(null,5);
        expect(result).to.equal(5);
    });

});