import { expect } from 'chai';
import get from '../../src/get.js';

describe('get.js Tests', () => {
    
    it('Should return the objects value at the end of the bath', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] }
        const result = get(object,'a[0].b.c');
        expect(result).to.equal(3);
    });

    it('Should return the objects value at the end of the bath', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] }
        const result = get(object,['a', '0', 'b', 'c']);
        expect(result).to.equal(3);
    });

    it('Should return default as a result', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] }
        const result = get(object, 'a.b.c', 'default');
        expect(result).to.equal('default');
    });


    it('Should return undefined as a result', () => {
        const result = get(null, 'a');
        expect(result).to.equal(undefined);
    });

    it('Should return default as a result', () => {
        const result = get(null, 'a', 'default');
        expect(result).to.equal('default');
    });


});