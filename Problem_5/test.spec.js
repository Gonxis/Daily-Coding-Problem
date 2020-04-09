const { cons, car, cdr } = require('./Problem_5');

describe('Functions', () => {
    test('cons function exists', () => {
        expect(typeof cons).toBe('function');
    });

    test('car function exists', () => {
        expect(typeof car).toBe('function');
    });

    test('cdr function exists', () => {
        expect(typeof cdr).toBe('function');
    });
});

describe('Contents of the Address part of the Register number (AKA car) calls', () => {
    test(`car(cons(3, 4)) equals to 3`, () => {
        expect(
            car(cons(3, 4))
        ).toBe(3);
    });

    xtest(`car(cons(0, 1)) equals to 0`, () => {
        expect(
            car(cons(0, 1))
        ).toBe(0);
    });

    xtest(`car(cons(a, 3)) to throw a new Error: 'Value not a number'`, () => {
        expect(
            car(cons("a", 3))
        ).toThrow(new Error("Value not a number"));
    });
});

describe('Contents of the Decrement part of the Register number (AKA cdr) calls', () => {
    test(`cdr(cons(3, 4)) equals to 4`, () => {
        expect(
            cdr(cons(3, 4))
        ).toBe(4);
    });

    xtest(`cdr(cons(0, 1)) equals to 1`, () => {
        expect(
            cdr(cons(0, 1))
        ).toBe(1);
    });

    xtest(`cdr(cons(3, a)) to throw a new Error: 'Value not a number'`, () => {
        expect(
            car(cons(3, "a"))
        ).toThrow(new Error("Value not a number"));
    });
});

describe('cons (Constructs a cell with two pointers) calls', () => {
    let fn = (n, m) => n * 2 + m * 3;
    let car = (n, m) => n;
    let cdr = (n, m) => m;

    test(`cons(2, 3)(fn) equals to 13`, () => {
        expect(
            cons(2, 3)(fn)
        ).toBe(13);
    });

    test(`cons(2, 3)(car) equals to 2`, () => {
        expect(
            cons(2, 3)(car)
        ).toBe(2);
    });

    xtest(`cons(2, 3)(cdr) equals to 3`, () => {
        expect(
            cons(2, 3)(cdr)
        ).toBe(3);
    });
});