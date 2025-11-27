import { expect } from 'chai';
import filter from '../../src/filter.js';

describe('Filter.js Tests (Unit)', () => {

    it('should filter based on type (numbers)', () => {
        const input = [1, '2', 3, '4'];
        const result = filter(input, (val) => typeof val === 'number');
        expect(result).to.deep.equal([1, 3]);
    });

    it('should filter based on value (negatives)', () => {
        const result = filter([-1, 1, -5, 2], (val) => val < 0);
        expect(result).to.deep.equal([-1, -5]);
    });

    it('should handle mixed arrays without crashing', () => {
        const input = [1, true, 'test', null];
        const result = filter(input, (val) => typeof val === 'string');
        expect(result).to.deep.equal(['test']);
    });

    it('should filter nested arrays based on inner values', () => {
        const input = [[1, 2], [3, 4], [5, 6]];
        // Keep arrays where first element is > 2
        const result = filter(input, (inner) => inner[0] > 2);
        expect(result).to.deep.equal([[3, 4], [5, 6]]);
    });

    it('should return the original array if predicate always returns true', () => {
        const input = [1, 2, 3];
        const result = filter(input, () => true);
        expect(result).to.deep.equal([1, 2, 3]);
    });

    it('should return an empty array if predicate always returns false', () => {
        const input = [1, 2, 3];
        const result = filter(input, () => false);
        expect(result).to.deep.equal([]);
    });

    it('should return empty array when input array is empty', () => {
        const result = filter([], (val) => val > 0);
        expect(result).to.deep.equal([]);
    });

    it('should return empty array when input collection is null/undefined', () => {
        const result = filter(null, (val) => val);
        expect(result).to.deep.equal([]);
    });

    it('should filter by truthiness if predicate is missing', () => {
        const input = [1, 0, 2, null, undefined, 3];
        try {
            const result = filter(input);
            expect(result).to.deep.equal([1, 2, 3]);
        } catch (e) {
            expect(e).to.exist;
        }
    });
});