const firstPositiveNumberMissing = require('./Problem_4');

test('firstPositiveNumberMissing function exists', () => {
    expect(typeof firstPositiveNumberMissing).toBe('function');
});

describe.each([
    [
        [3, 4, -1, 1],
        2
    ],
    [
        [1, 2, 0],
        3
    ],
    [
        [-3, -4, -1],
        1
    ],
    [
        [3, 4, -1, 1, 2],
        5
    ],
    [
        [0, 0, -1, -1],
        1
    ]
])(
    'input = %s',
    (input, expected) => {
        test(`returns ${expected}`, () => {
            expect(firstPositiveNumberMissing(input)).toEqual(expected);
        });
    },
);