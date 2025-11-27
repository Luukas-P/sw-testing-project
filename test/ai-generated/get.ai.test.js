import { expect } from 'chai';
import get from '../../src/get.js';

describe('get (AI Generated)', () => {

    const object = { 'a': [{ 'b': { 'c': 3 } }] };

    it('should retrieve a value using a string path', () => {
        const result = get(object, 'a[0].b.c');
        expect(result).to.equal(3);
    });

    it('should retrieve a value using an array path', () => {
        const result = get(object, ['a', '0', 'b', 'c']);
        expect(result).to.equal(3);
    });

    it('should return undefined if the path does not exist and no default is provided', () => {
        const result = get(object, 'a.b.c');
        expect(result).to.be.undefined;
    });

    it('should return the default value if the path does not exist', () => {
        const result = get(object, 'a.b.c', 'default');
        expect(result).to.equal('default');
    });

    it('should return the default value if the resolved value is undefined', () => {
        const objWithUndefined = { 'x': undefined };
        const result = get(objWithUndefined, 'x', 'default');
        expect(result).to.equal('default');
    });

    it('should return the default value if the object is null', () => {
        const result = get(null, 'a.b.c', 'default');
        expect(result).to.equal('default');
    });

    it('should return the default value if the object is undefined', () => {
        const result = get(undefined, 'a.b.c', 'default');
        expect(result).to.equal('default');
    });

    it('should handle complex paths including array indices', () => {
        const complexObj = { a: { b: [ { c: 10 } ] } };
        const result = get(complexObj, 'a.b[0].c');
        expect(result).to.equal(10);
    });

    it('should return null if the key exists and holds the value null (and not trigger default)', () => {
        // Lodash get usually returns null if the value is explicitly null, not the default value.
        // The implementation: `result === undefined ? defaultValue : result` confirms this.
        const objWithNull = { 'x': null };
        const result = get(objWithNull, 'x', 'default');
        expect(result).to.be.null;
    });

});