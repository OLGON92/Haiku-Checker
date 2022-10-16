export default class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

 checker = (L1, L2, L3) => {
  let ah = false;
  let vowel = /[aeiouy]/gi;
  ah = L2.match(vowel); 
  return ah.length;
  }
}



