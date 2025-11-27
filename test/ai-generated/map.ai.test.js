import { expect } from 'chai';
import map from '../../src/map.js';

describe('map (AI Generated)', () => {

    it('should apply the iteratee to every element in the array', () => {
        const square = (n) => n * n;
        const result = map([4, 8], square);
        expect(result).to.deep.equal([16, 64]);
    });

    it('should create a new array, not modify the original', () => {
        const array = [1, 2, 3];
        const result = map(array, (n) => n * 2);
        
        expect(result).to.deep.equal([2, 4, 6]);
        expect(array).to.deep.equal([1, 2, 3]); // Original remains unchanged
    });

    it('should pass value, index, and array to the iteratee', () => {
        const array = [10, 20];
        const iteratee = (value, index, arr) => {
            return `val:${value}-idx:${index}-len:${arr.length}`;
        };
        
        const result = map(array, iteratee);
        expect(result).to.deep.equal(['val:10-idx:0-len:2', 'val:20-idx:1-len:2']);
    });

    it('should handle null input by returning an empty array', () => {
        // Source code: const length = array == null ? 0 ...
        const result = map(null, (n) => n);
        expect(result).to.be.an('array').that.is.empty;
    });

    it('should handle undefined input by returning an empty array', () => {
        const result = map(undefined, (n) => n);
        expect(result).to.be.an('array').that.is.empty;
    });

    it('should handle empty arrays', () => {
        const result = map([], (n) => n);
        expect(result).to.be.an('array').that.is.empty;
    });

    it('should map objects in an array (E-commerce scenario)', () => {
        const products = [
            { id: 1, name: 'Laptop', price: 1000 },
            { id: 2, name: 'Mouse', price: 20 }
        ];
        // Extract just the prices
        const prices = map(products, (p) => p.price);
        expect(prices).to.deep.equal([1000, 20]);
    });

    it('should map to boolean values', () => {
        const values = [1, 0, true, false, 'a', ''];
        const result = map(values, Boolean);
        expect(result).to.deep.equal([true, false, true, false, true, false]);
    });

    it('should use the index in the mapping logic', () => {
        // e.g., value + index
        const result = map([10, 20, 30], (n, i) => n + i);
        expect(result).to.deep.equal([10, 21, 32]);
    });

});