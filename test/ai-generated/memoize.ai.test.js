import { expect } from 'chai';
import memoize from '../../src/memoize.js';

describe('memoize (AI Generated)', () => {

    it('should memoize the result of a function', () => {
        let callCount = 0;
        const add = (a) => {
            callCount++;
            return a + 10;
        };

        const memoizedAdd = memoize(add);

        // First call
        expect(memoizedAdd(5)).to.equal(15);
        expect(callCount).to.equal(1);

        // Second call (should be cached)
        expect(memoizedAdd(5)).to.equal(15);
        expect(callCount).to.equal(1); // Count should remain 1
    });

    it('should re-execute the function for different arguments', () => {
        let callCount = 0;
        const add = (a) => {
            callCount++;
            return a + 10;
        };
        const memoizedAdd = memoize(add);

        memoizedAdd(5);
        memoizedAdd(6);

        expect(callCount).to.equal(2);
    });

    it('should use only the first argument as the cache key by default', () => {
        // This is a specific behavior of Lodash/this implementation.
        // It uses args[0] as the key if no resolver is provided.
        const sum = (a, b) => a + b;
        const memoizedSum = memoize(sum);

        const result1 = memoizedSum(1, 2); // Key is 1, returns 3
        const result2 = memoizedSum(1, 10); // Key is 1, returns cached 3 (ignoring the 10)

        expect(result1).to.equal(3);
        expect(result2).to.equal(3); // This proves it ignored the second argument
    });

    it('should use a resolver function to determine the cache key', () => {
        const sum = (a, b) => a + b;
        // Resolver uses both arguments to create a key
        const resolver = (a, b) => `${a}-${b}`;
        const memoizedSum = memoize(sum, resolver);

        const result1 = memoizedSum(1, 2);
        const result2 = memoizedSum(1, 10);

        expect(result1).to.equal(3);
        expect(result2).to.equal(11); // Should compute correctly now
    });

    it('should expose the cache property', () => {
        const add = (n) => n + 1;
        const memoizedAdd = memoize(add);

        memoizedAdd(1);
        
        expect(memoizedAdd.cache).to.be.instanceOf(Map);
        expect(memoizedAdd.cache.has(1)).to.be.true;
    });

    it('should allow manual modification of the cache', () => {
        const add = (n) => n + 1;
        const memoizedAdd = memoize(add);

        // Pre-fill cache
        memoizedAdd.cache.set(10, 'manipulated');

        expect(memoizedAdd(10)).to.equal('manipulated');
    });

    it('should throw a TypeError if the first argument is not a function', () => {
        expect(() => memoize(null)).to.throw(TypeError, 'Expected a function');
        expect(() => memoize(123)).to.throw(TypeError, 'Expected a function');
    });

    it('should throw a TypeError if the resolver is provided but not a function', () => {
        const func = () => {};
        expect(() => memoize(func, 'not-a-function')).to.throw(TypeError, 'Expected a function');
    });

    it('should preserve the `this` binding', () => {
        const object = {
            multiplier: 2,
            multiply: function(n) {
                return n * this.multiplier;
            }
        };

        const memoizedMultiply = memoize(object.multiply.bind(object));

        expect(memoizedMultiply(5)).to.equal(10);
    });

});