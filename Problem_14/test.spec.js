const estimatePiWithMonteCarloMethod = require('./Problem_14');

describe('Functions', () => {
    test('estimatePiWithMonteCarloMethod function exists', () => {
        expect(typeof estimatePiWithMonteCarloMethod).toBe('function');
    });
});

describe('estimatePiWithMonteCarloMethod calls', () => {
    test(`estimatePiWithMonteCarloMethod() equals to 3.149`, () => {
        expect(
            estimatePiWithMonteCarloMethod()
        ).toEqual(3.149);
    });
});