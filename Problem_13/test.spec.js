const { lengthOfLongestSubstring, countMapSize } = require('./Problem_13');

describe('Functions', () => {
    test('lengthOfLongestSubstring function exists', () => {
        expect(typeof lengthOfLongestSubstring).toBe('function');
    });

    test('countMapSize function exists', () => {
        expect(typeof countMapSize).toBe('function');
    });
});

describe('countMapSize calls', () => {
    test(`countMapSize({ a: 1, c: 3 }) equals to 2`, () => {
        let expected = { a: 1, c: 3 };
        expect(
            countMapSize(expected)
        ).toEqual(2);
    });
});

describe('lengthOfLongestSubstring calls', () => {
    test(`lengthOfLongestSubstring(2, abcba) equals to 3`, () => {
        expect(
            lengthOfLongestSubstring(2, "abcba")
        ).toEqual(3);
    });

    test(`lengthOfLongestSubstring(2, abcbbbbcccbdddadacb) equals to 10`, () => {
        expect(
            lengthOfLongestSubstring(2, "abcbbbbcccbdddadacb")
        ).toEqual(10);
    });

    test(`lengthOfLongestSubstring(3, abcadcacacaca) equals to 11`, () => {
        expect(
            lengthOfLongestSubstring(3, "abcadcacacaca")
        ).toEqual(11);
    });
});