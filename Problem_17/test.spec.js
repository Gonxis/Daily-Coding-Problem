const longestPath = require('./Problem_17');

describe('Functions', () => {
    test('longestPath function exists', () => {
        expect(typeof longestPath).toBe('function');
    });
});

describe('longestPath calls', () => {
    test(`longestPath("dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext")
    equals to 32`, () => {
        let expected = 'dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext';
        expect(
            longestPath(expected)
        ).toEqual(32);
    });

    test(`longestPath("") equals to 0`, () => {
        let expected = '';
        expect(
            longestPath(expected)
        ).toEqual(0);
    });
});