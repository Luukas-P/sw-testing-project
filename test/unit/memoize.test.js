import { expect } from 'chai';
import memoize from '../../src/memoize.js';

describe('memoize.js Tests (Unit)', () => {

    function getValues(obj) {
        return Object.values(obj);
    }

    const memoizedValues = memoize(getValues);
    const object1 = { 'a': 1, 'b': 2 }
    const object2 = { 'c': 3, 'd': 4 }

    let callCount;
    let memoizedFunc;
    let originalFunc;

    beforeEach(()=> {
        callCount = 0
        originalFunc = (...args) => {
            callCount++;
            if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null) {
                return Object.values(args[0]);
            }
            return args; // Palautetaan argumentit taulukkona resolver-testiä varten
        };
        memoizedFunc = memoize(originalFunc);
    })
    
    it('Should return values of the keys', () => {
        const result = memoizedFunc(object1);
        expect(callCount).to.equal(1);
        expect(result).to.deep.equal([1, 2]);

        const cachedResult = memoizedFunc(object1);
        expect(callCount).to.equal(1);
        expect(cachedResult).to.deep.equal([1, 2]);
    });

    it('Should return values of the keys', () => {
        const result = memoizedFunc(object2);
        expect(callCount).to.equal(1);
        expect(result).to.deep.equal([3, 4]);

        const cachedResult = memoizedFunc(object2);
        expect(callCount).to.equal(1);
        expect(cachedResult).to.deep.equal([3, 4]);
    });

    it('Should return the cached result even if the input object content is modified', () => {
        const result = memoizedFunc(object1);
        expect(callCount).to.equal(1); 
        expect(result).to.deep.equal([1, 2]);
    
        object1.a = 100; 

        const cachedResult = memoizedFunc(object1);
        expect(callCount).to.equal(1); 
        expect(cachedResult).to.deep.equal([1, 2]);
    });

    it('Should return result from cache after cache is manually modified', () => {
        const object3 = { 'z': 5 };
        const customResult = ['custom', 'data'];

        memoizedFunc(object3);
        expect(callCount).to.equal(1);
        
        memoizedFunc.cache.set(object3, customResult);
    
        const result = memoizedFunc(object3);
        
        expect(callCount).to.equal(1);
        expect(result).to.deep.equal(customResult);
    });

    it('Should use WeakMap as cache when memoize.Cache is replaced', () => {
        const originalCache = memoize.Cache; 
        
        memoize.Cache = WeakMap;
        
        const trackingFunc = (a) => { callCount++; return a; };
        const weakMemoizedFunc = memoize(trackingFunc);
    
        expect(weakMemoizedFunc.cache instanceof WeakMap).to.be.true;

        const obj = {};
        weakMemoizedFunc(obj);
        weakMemoizedFunc(obj);
    
        expect(callCount).to.equal(1);
        memoize.Cache = originalCache;
    });

    it('Should use the resolver function to determine the cache key', () => {
        const sumResolver = (a, b) => a + b; 
        const memoizedSum = memoize(originalFunc, sumResolver);
        
        const result = memoizedSum(10, 5); 
        expect(result).to.deep.equal([10, 5]);
        expect(callCount).to.equal(1);
    
        const cachedResult = memoizedSum(12, 3); 

        expect(callCount).to.equal(1); 
        expect(cachedResult).to.deep.equal([10, 5]);
    });


});