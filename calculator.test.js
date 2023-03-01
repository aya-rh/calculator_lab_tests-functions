const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");


describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 133000 + 456000;
    actual = sum(133000, 456000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -23 + -15;
    actual = sum(-23, -15);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 33 + 0;
    actual = sum(33, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  test('can add subtract small positive numbers', () => {
    expected = 7 - 4;
    actual = subtract(7, 4);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    expected = 456000 - 133000;
    actual = subtract(456000, 133000);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = -23 - -15;
    actual = subtract(-23, -15);
    expect(actual).toBe(expected);
  });

  test('can subtract two decimal numbers', () => {
    expected = 2.3 - 0.15;
    actual = subtract(2.3, 0.15);
    expect(actual).toBe(expected);
  });

  test('can subtract 0', () => {
    expected = 2.3 - 0;
    actual = subtract(2.3, 0);
    expect(actual).toBe(expected);
  });
});


describe('multiply', () => {
  test('can multiply small positive numbers', () => {
    expected = 7 * 4;
    actual = multiply(7, 4);
    expect(actual).toBe(expected);
  });

  test('can multiply large numbers', () => {
    expected = 798326 * 434789;
    actual = multiply(798326, 434789);
    expect(actual).toBe(expected);
  });

  test('can multiply by 0', () => {
    expected = 7932 * 0;
    actual = multiply(7932, 0);
    expect(actual).toBe(expected);
  });

  test('can multiply negative numbers', () => {
    expected = -7932 * -3463;
    actual = multiply(-7932, -3463);
    expect(actual).toBe(expected);
  });


});

describe('divide', () => {
  test('can divide small positive numbers', () => {
    expected = 7 / 4;
    actual = divide(7, 4);
    expect(actual).toBe(expected);
  });

  test('can divide large numbers', () => {
    expected = 798326 / 434789;
    actual = divide(798326, 434789);
    expect(actual).toBe(expected);
  });

  test('can divide by 0', () => {
    expected = 7932 / 0;
    actual = divide(7932, 0);
    expect(actual).toBe(expected);
  });

  test('can divide negative numbers', () => {
    expected = -7932 / -3463;
    actual = divide(-7932, -3463);
    expect(actual).toBe(expected);
  });
});

describe('modulus', () => {
  test('can modulus small positive numbers', () => {
    expected = 7 % 15;
    actual = modulus(7, 15);
    expect(actual).toBe(expected);
  });

  test('can modulus large numbers', () => {
    expected = 998326 % 434789;
    actual = modulus(998326, 434789);
    expect(actual).toBe(expected);
  });

  test('can modulus negative numbers', () => {
    expected = -7932 % -3463;
    actual = modulus(-7932, -3463);
    expect(actual).toBe(expected);
  });
});

describe('even', () => {
  test('can identify that num is an even number', () => {
    actual = even(10);
    expect(actual).toBeTruthy();

    // expected = true;
    // actual = even(10);
    // expect(actual).toBe(expected);
  });

  test('can identify that num is not even number', () => {
    actual = even(193);
    expect(actual).toBeFalsy();
  });
});

describe('odd', () => {
  test('can identify that num is an odd number', () => {
    actual = odd(267);
    expect(actual).toBeTruthy();

    // expected = true;
    // actual = odd(267);
    // expect(actual).toBe(expected);
  });

  test('can identify that num is not odd number', () => {
    actual = odd(269870);
    expect(actual).toBeFalsy();
  });
});
