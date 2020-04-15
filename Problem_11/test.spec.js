const autocomplete = require('./Problem_11');

describe('Functions', () => {
    test('autocomplete function exists', () => {
        expect(typeof autocomplete).toBe('function');
    });
});

describe('autocomplete calls', () => {
    let expected = ["deer", "deal", "dear"];
    test(`autocomplete(s, set) equals to [deer, deal, dear]`, () => {
        expect(
            autocomplete("de", ["deer", "dog", "deal", "dear"])
        ).toEqual(expect.arrayContaining(expected));
    });

    test(`autocomplete(s, set) equals to [deer, deal, dear, dadel]`, () => {
        expect(
            autocomplete("de", ["deer", "dog", "deal", "dear", "dadel"])
        ).toEqual(expect.arrayContaining(expected));
    });

    let expected2 = ["tweet", "tweeter", "two"];
    test(`autocomplete(s, set) equals to [tweet, tuenti, tweeter, two, facebook]`, () => {
        expect(
            autocomplete("tw", ["tweet", "tuenti", "tweeter", "two", "facebook"])
        ).toEqual(expect.arrayContaining(expected2));
    });
});