const decode = require('./Problem_7');

describe('Functions', () => {
    test('decode function exists', () => {
        expect(typeof decode).toBe('function');
    });
});

describe('Decode calls', () => {
    test(`decode('111') equals to 3`, () => {
        expect(
            decode("111")
        ).toBe(3);
    });

    test(`decode('12') equals to 2`, () => {
        expect(
            decode("12")
        ).toBe(2);
    });
});