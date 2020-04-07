const NODE = require('./Node');
const { serialize, deserialize } = require('./Problem_3');

test('serialize function exists', () => {
    expect(typeof serialize).toBe('function');
});

test('deserialize function exists', () => {
    expect(typeof deserialize).toBe('function');
});

test(`Testing for the value of for the deserialized serialized binary tree:
          root, left, left.left, null, right`, () => {
    const node = (
        new NODE('root',
            new NODE('left',
                new NODE('left.left')
            ),
            new NODE('right')
        )
    );

    expect(
        deserialize(serialize(node)).left.left.value
    ).toBe('left.left');
});

test(`Testing for the value of 2 for the deserialized serialized binary tree:
          5, 3, -9, 5, 31, 2, -17`, () => {
    const node = (
        new NODE('5',
            new NODE('3',
                new NODE('-9'),
                new NODE('5')
            ),
            new NODE('31',
                new NODE('2'),
                new NODE('-17')
            )
        )
    );

    expect(
        deserialize(serialize(node)).right.left.value
    ).toBe('2');
});

test(`serialize(deserialize(serialize(node))) equals to serialize(node) for:
          a, b, c, d, e, null, g`, () => {
    const node = (
        new NODE('b',
            new NODE('d',
                new NODE('a'),
                new NODE('k')
            ),
            new NODE('o',
                null,
                new NODE('p')
            )
        )
    );

    expect(
        serialize(deserialize(serialize(node)))
    ).toBe(serialize(node));
});