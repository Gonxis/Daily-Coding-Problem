const scheduler = require('./Problem_10');

describe('Functions', () => {
    test('scheduler function exists', () => {
        expect(typeof scheduler).toBe('function');
    });
});

describe('scheduler calls', () => {
    test(`scheduler(fn(), ms) equals to 4`, () => {
        let fn = () => (2 + 2);
        expect(
            scheduler(fn(), 5000)
        ).toBe(4);
    });
});