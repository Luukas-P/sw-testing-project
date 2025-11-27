import { expect } from 'chai';
import toNumber from '../../src/toNumber.js';

describe('toNumber (AI Generated)', () => {

    it('should return the value if it is already a number', () => {
        expect(toNumber(3.2)).to.equal(3.2);
        expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
        expect(toNumber(Infinity)).to.equal(Infinity);
        expect(toNumber(-Infinity)).to.equal(-Infinity);
    });

    it('should convert string representations of numbers', () => {
        expect(toNumber('3.2')).to.equal(3.2);
        expect(toNumber('0')).to.equal(0);
        expect(toNumber('-1.5')).to.equal(-1.5);
    });

    it('should trim whitespace from strings', () => {
        expect(toNumber('  3.2  ')).to.equal(3.2);
    });

    it('should handle binary string values (0b prefix)', () => {
        expect(toNumber('0b10')).to.equal(2);
        expect(toNumber('0b1111')).to.equal(15);
    });

    it('should handle octal string values (0o prefix)', () => {
        expect(toNumber('0o10')).to.equal(8);
        expect(toNumber('0o77')).to.equal(63);
    });

    it('should handle valid hexadecimal string values (0x prefix)', () => {
        // Standard JS Number() handles 0x, checking if toNumber preserves this
        expect(toNumber('0x10')).to.equal(16);
    });

    it('should return NaN for bad signed hexadecimal strings', () => {
        // The source code specifically checks reIsBadHex = /^[-+]0x[0-9a-f]+$/i
        expect(toNumber('-0x10')).to.be.NaN;
        expect(toNumber('+0x10')).to.be.NaN;
    });

    it('should return NaN for Symbols', () => {
        const symbol = Symbol('a');
        expect(toNumber(symbol)).to.be.NaN;
    });

    it('should convert objects using their valueOf method', () => {
        const obj = {
            valueOf: () => 42
        };
        expect(toNumber(obj)).to.equal(42);
    });

    it('should convert objects using toString if valueOf returns an object', () => {
        const obj = {
            valueOf: () => ({}), // returns object, so it moves to string conversion
            toString: () => '10'
        };
        // The implementation: value = isObject(other) ? `${other}` : other
        // This converts the result to string "10" then parses it.
        expect(toNumber(obj)).to.equal(10);
    });

    it('should handle booleans', () => {
        expect(toNumber(true)).to.equal(1);
        expect(toNumber(false)).to.equal(0);
    });

    it('should handle null', () => {
        // +null is 0
        expect(toNumber(null)).to.equal(0);
    });

    it('should handle undefined', () => {
        // +undefined is NaN
        expect(toNumber(undefined)).to.be.NaN;
    });

    it('should return NaN for invalid strings', () => {
        expect(toNumber('abc')).to.be.NaN;
        expect(toNumber('123abc')).to.be.NaN; // parseFloat might handle this, but Number('123abc') is NaN.
    });

});