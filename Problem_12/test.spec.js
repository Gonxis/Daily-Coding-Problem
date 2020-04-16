const climbStaircase = require('./Problem_12');

describe('Functions', () => {
    test('climbStaircase function exists', () => {
        expect(typeof climbStaircase).toBe('function');
    });
});

describe('climbStaircase calls', () => {
    test(`climbStaircase(4) equals to 5`, () => {
        expect(
            climbStaircase(4)
        ).toBe(5);
    });

    test(`climbStaircase(5) equals to 8`, () => {
        expect(
            climbStaircase(5)
        ).toBe(8);
    });

    test(`climbStaircase(1) equals to 1`, () => {
        expect(
            climbStaircase(1)
        ).toBe(1);
    });
});