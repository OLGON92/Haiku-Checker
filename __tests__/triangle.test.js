import Haiku from '../src/haiku.js';

describe('Haiku', () => {

  test('Should be able to count how many vowels are in a sentence', () => {
    const poem = new Haiku("This has an A", "e e e", "nah2");
    expect(poem.checker(poem.line1, poem.line2)).toEqual(2);
  });
});