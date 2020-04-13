const { largestAdjacentSum, newInclude, newExclude } = require('./Problem_9');

describe('Functions', () => {
    test('largestAdjacentSum function exists', () => {
        expect(typeof largestAdjacentSum).toBe('function');
    });

    test('newInclude function exists', () => {
        expect(typeof newInclude).toBe('function');
    });

    test('newExclude function exists', () => {
        expect(typeof newExclude).toBe('function');
    });
});

describe('newIncludes calls', () => {
    test(`newIncludes(5, 10, 1) equals to 11`, () => {
        expect(
            newInclude(5, 10, 1)
        ).toBe(11);
    });

    test(`newIncludes(3, 1, 1) equals to 3`, () => {
        expect(
            newInclude(3, 1, 1)
        ).toBe(3);
    });
});

describe('newExcludes calls', () => {
    test(`newExclude(2, 9) equals to 9`, () => {
        expect(
            newExclude(2, 9)
        ).toBe(9);
    });

    test(`newExclude(5, 3) equals to 5`, () => {
        expect(
            newExclude(5, 3)
        ).toBe(5);
    });
});

describe('largestAdjacentSum calls', () => {
    test(`largestAdjacentSum([2, 4, 6, 2, 5]) equals to 13`, () => {
        expect(
            largestAdjacentSum([2, 4, 6, 2, 5])
        ).toBe(13);
    });

    test(`largestAdjacentSum([5, 2, 2, 5]) equals to 10`, () => {
        expect(
            largestAdjacentSum([5, 2, 2, 5])
        ).toBe(10);
    });
});