const isThatTrue = require('./Problem_1');

test('isThatTrue function exists', () => {
    expect(typeof isThatTrue).toBe('function');
});

describe.each([
    [
        [10, 15, 3, 7], 17, true
    ],
    [
        [10, 15, 3, 7], 30, false
    ],
    [
        [10, 15, 3, 7, 3, 9], 6, true
    ],
    [
        [8, 7, 2, 6], 9, true
    ],
    [
        [8, 7, 2, 6], 16, false
    ]
])(
    'list = %s and k = %i',
    (list, k, expected) => {
        test(`returns ${expected}`, () => {
            expect(isThatTrue(list, k)).toBe(expected);
        });
    },
);