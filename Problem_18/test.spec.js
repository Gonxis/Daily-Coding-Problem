const MaxValsOfEachSubArr = require('./Problem_18');

describe('Functions', () => {
    test('MaxValsOfEachSubArr function exists', () => {
        expect(typeof MaxValsOfEachSubArr).toBe('function');
    });
});

describe('MaxValsOfEachSubArr calls', () => {
    test(`maxValsOfEachSubarr([10, 5, 2, 7, 8, 7], 3) equals to [10, 7, 8, 8]`, () => {
        expect(
            MaxValsOfEachSubArr([10, 5, 2, 7, 8, 7], 3)
        ).toEqual([10, 7, 8, 8]);
    });

    test(`maxValsOfEachSubarr([10, 51, 12, 62, 8, 1, 93], 2) equals to [10, 7, 8, 8]`, () => {
        expect(
            MaxValsOfEachSubArr([10, 51, 12, 62, 8, 1, 93], 2)
        ).toEqual([51, 51, 62, 62, 8, 93]);
    });
});