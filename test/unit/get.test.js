import { expect } from 'chai';
import get from '../../src/get.js';

describe('get.js Tests (Unit)', () => {
    
    const object = { 'a': [{ 'b': { 'c': 3 } }] }
    it('Should return the objects value at the end of the path', () => {
        const result = get(object,'a[0].b.c');
        expect(result).to.equal(3);
    });

    it('Should return the objects value at the end of the path', () => {
        const result = get(object,['a', '0', 'b', 'c']);
        expect(result).to.equal(3);
    });

    it('Should return default as a result', () => {
        const result = get(object, 'a.b.c', 'default');
        expect(result).to.equal('default');
    });


    it('Should return undefined as a result when obj1 is null & defalut value is undefined', () => {
        const result = get(null, 'a');
        expect(result).to.equal(undefined);
    });

    it('Should return undefined as a result when obj1 is NaN & defalut value is undefined', () => {
        const result = get(NaN, 'a');
        expect(result).to.equal(undefined);
    });

    it('Should return undefined as a result when obj1 is undefined & defalut value is undefined', () => {
        const result = get(undefined, 'a');
        expect(result).to.equal(undefined);
    });

    it('Should return default value as a result when obj1 is null & default value is defined', () => {
        const result = get(null, 'a', 'default');
        expect(result).to.equal('default');
    });

    it('Should return default value as a result when obj1 is NaN & default value is defined', () => {
        const result = get(NaN, 'a', 'default');
        expect(result).to.equal('default');
    });

    it('Should return default value as a result when obj1 is undefined & default value is defined', () => {
        const result = get(undefined, 'a', 'default');
        expect(result).to.equal('default');
    });


});