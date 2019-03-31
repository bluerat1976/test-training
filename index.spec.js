
const calc = require('./index.js');

describe('getDiscriminant', () => {

  test('should return 8 when a=2, b=4, c=1', () => {

      expect(calc.getDiscriminant(2, 4, 1)).toBe(8);

  });   test('should return 0 when a=2, b=4, c=2', () => {

      expect(calc.getDiscriminant(2, 4, 2)).toBe(0);

  });   test('should return 0 when a=4, b=4, c=4', () => {

      expect(calc.getDiscriminant(4, 4, 4)).toBe(-48);

  });

});

describe('getRoot', () => {

  test('should return 2 equal roots when a=1, b=-4, c=4', () => {

      expect(calc.getRoot(1, -4, 4)).toEqual({ x1: 2, x2: 2 });

  });

  test('should return "no real roots" message when a=4, b=4, c=4', () => {

      expect(calc.getRoot(4, 4, 4)).toEqual({ msg: 'no real roots' });

  });

  test('should return 2 real roots when a=1, b=0, c=-4', () => {

      expect(calc.getRoot(1, 0, -4)).toEqual({ x1: 2, x2: -2 });

  });

})

describe('getSum', () => {
    test('should sum a and b when a = 3, b = 2', () =>{
        expect(calc.getSum(3, 2)).toBe(5);
    });

    test('should sum a and b when a = 4, b = 5', () =>{
        expect(calc.getSum(4, 5)).toBe(8);
    });
})

