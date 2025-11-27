import { expect } from 'chai';
import eq from '../../src/eq.js';

describe('eq (AI Generated)', () => {
    
    it('should return true for identical numbers', () => {
        expect(eq(1, 1)).to.be.true;
    });

    it('should return true for identical strings', () => {
        expect(eq('a', 'a')).to.be.true;
    });

    it('should return true for NaN values', () => {
        expect(eq(NaN, NaN)).to.be.true;
    });

    it('should return true for same object reference', () => {
        const object = { 'a': 1 };
        expect(eq(object, object)).to.be.true;
    });

    it('should return false for different objects with same content', () => {
        const object = { 'a': 1 };
        const other = { 'a': 1 };
        expect(eq(object, other)).to.be.false;
    });

    it('should return false for different primitive values', () => {
        expect(eq('a', 'b')).to.be.false;
    });

    it('should return false for strict type mismatch (string vs number)', () => {
        expect(eq('1', 1)).to.be.false;
    });

    it('should return false for strict type mismatch (boolean vs number)', () => {
        expect(eq(true, 1)).to.be.false;
    });

    it('should return true for null compared to null', () => {
        expect(eq(null, null)).to.be.true;
    });

    it('should return true for undefined compared to undefined', () => {
        expect(eq(undefined, undefined)).to.be.true;
    });

    it('should return false for null compared to undefined', () => {
        expect(eq(null, undefined)).to.be.false;
    });

    it('should return true for +0 and -0', () => {
        expect(eq(0, -0)).to.be.true;
    });

    it('should return false for wrapped objects vs primitives', () => {
        expect(eq('a', Object('a'))).to.be.false;
    });

});