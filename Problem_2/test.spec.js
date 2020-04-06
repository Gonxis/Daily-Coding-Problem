const productOfAllNumbsInArray = require('./Problem_2');

test('productOfAllNumbsInArray function exists', () => {
    expect(typeof productOfAllNumbsInArray).toBe('function');
});

describe.each([
    [
        [1, 2, 3, 4, 5],
        [120, 60, 40, 30, 24]
    ],
    [
        [3, 2, 1],
        [2, 3, 6]
    ],
    [
        [3, 0],
        [0, 3]
    ]
])(
    'input = %s',
    (input, expected) => {
        test(`returns ${expected}`, () => {
            expect(productOfAllNumbsInArray(input)).toEqual(expected);
        });
    },
);