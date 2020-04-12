const node = require("./Node");
const { countUnivalSubtrees, helper } = require('./Problem_8');

test('serialize function exists', () => {
    expect(typeof countUnivalSubtrees).toBe('function');
});

test('deserialize function exists', () => {
    expect(typeof helper).toBe('function');
});

test(`Testing for how many unival subtrees there are in the next Tree:
            0
           / \\
          1   0
             / \\
            1   0
           / \\
          1   1
  `, () => {
    const node_ =
        new node('0',
            new node('1'),
            new node('0',
                new node('1',
                    new node('1'),
                    new node('1')
                ),
                new node('0')
            )
        );

    expect(
        countUnivalSubtrees(node_)
    ).toBe(5);
});

test(`Testing for how many unival subtrees there are in the next Tree:
                a
               / \\
              a   a
                 / \\
                a   a
                     \\
                      A
  `, () => {
    const node_ =
        new node('a',
            new node('a'),
            new node('a',
                new node('a'),
                new node('a',
                    null,
                    new node('A')
                )
            )
        );

    expect(
        countUnivalSubtrees(node_)
    ).toBe(3);
});

test(`Testing for how many unival subtrees there are in the next Tree:
                a
               / \\
              c   b
                 / \\
                b   b
                     \\
                      b
  `, () => {
    const node_ =
        new node('a',
            new node('c'),
            new node('b',
                new node('b'),
                new node('b',
                    null,
                    new node('b')
                )
            )
        );

    expect(
        countUnivalSubtrees(node_)
    ).toBe(5);
});