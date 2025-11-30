import { expect } from 'chai';
import eq from '../../src/eq.js';

describe('eq.js Tests', () => {
    
    it('should return [1, 4, 9] when squaring [1, 2, 3]', () => {
        const result = map([1, 2, 3], (x) => x * x);
        expect(result).to.deep.equal([1, 4, 9]);
    });