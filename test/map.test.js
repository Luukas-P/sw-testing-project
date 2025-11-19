import { expect } from 'chai';
import map from '../src/map.js'; 

describe('Map.js Tests', () => {
    it('should return [1, 4, 9] when squaring [1, 2, 3]', () => {
        const result = map([1, 2, 3], (x) => x * x);
        expect(result).to.deep.equal([1, 4, 9]);
    });
});

