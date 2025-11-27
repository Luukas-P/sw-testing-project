import { expect } from 'chai';
import isBoolean from '../../src/isBoolean.js';

describe('isBoolean (AI Generated)', () => {
    
    it('should return true for boolean primitive `true`', () => {
        expect(isBoolean(true)).to.be.true;
    });

    it('should return true for boolean primitive `false`', () => {
        expect(isBoolean(false)).to.be.true;
    });

    it('should return true for Boolean objects', () => {
        expect(isBoolean(new Boolean(true))).to.be.true;
        expect(isBoolean(new Boolean(false))).to.be.true;
    });

    it('should return false for null', () => {
        expect(isBoolean(null)).to.be.false;
    });

    it('should return false for undefined', () => {
        expect(isBoolean(undefined)).to.be.false;
    });

    it('should return false for numbers (0 and 1)', () => {
        expect(isBoolean(0)).to.be.false;
        expect(isBoolean(1)).to.be.false;
    });

    it('should return false for strings ("true" and "false")', () => {
        expect(isBoolean('true')).to.be.false;
        expect(isBoolean('false')).to.be.false;
    });

    it('should return false for plain objects', () => {
        expect(isBoolean({ a: 1 })).to.be.false;
    });

    it('should return false for arrays', () => {
        expect(isBoolean([true])).to.be.false;
    });

    it('should return false for regex objects', () => {
        expect(isBoolean(/x/)).to.be.false;
    });

});