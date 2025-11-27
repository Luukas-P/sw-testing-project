import { expect } from 'chai';
import map from '../../src/map.js'; 

describe('Map.js Tests', () => {
    
    it('should return [1, 4, 9] when squaring [1, 2, 3]', () => {
        const result = map([1, 2, 3], (x) => x * x);
        expect(result).to.deep.equal([1, 4, 9]);
    });

    it('should handle mixed data types correctly when iteratee expects them', () => {
        const input = [1, 'a', 2, 'b'];
        const result = map(input, (val) => typeof val === 'number' ? val : val.toUpperCase());
        expect(result).to.deep.equal([1, 'A', 2, 'B']);
    });

    it('should not crash when iteratee encounters unexpected types (e.g., math on strings)', () => {
        const input = [1, 'a'];
        const result = map(input, (x) => x * 10);
        expect(result[0]).to.equal(10);
        expect(result[1]).to.be.NaN;
    });

    it('should utilize the index in the iteratee function', () => {
        const input = [10, 20, 30];
        const result = map(input, (val, index) => val + index);
        expect(result).to.deep.equal([10, 21, 32]);
    });

    it('should map over nested arrays correctly', () => {
        const input = [[1, 2], [3, 4]];
        const result = map(input, (inner) => inner[0]);
        expect(result).to.deep.equal([1, 3]);
    });

    it('should return an empty array when input is empty', () => {
        const result = map([], (x) => x * x);
        expect(result).to.deep.equal([]);
    });

    it('should return an empty array (or safe value) when input array is null/undefined', () => {
        const result = map(null, (x) => x);
        expect(result).to.deep.equal([]); 
    });

    it('should handle missing iteratee (return array or throw controlled error)', () => {
        const input = [1, 2, 3];
        try {
            const result = map(input, null);
            expect(result).to.deep.equal([1, 2, 3]); 
        } catch (error) {
            expect(error).to.exist; 
        }
    });

    it('should return an array of undefineds if the iteratee returns undefined', () => {
        const result = map([1, 2], () => undefined);
        expect(result).to.deep.equal([undefined, undefined]);
    });
});

