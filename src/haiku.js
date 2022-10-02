export default class Haiku {
  constructor() {

  }
}

function new_count(word) {
  word = word.toLowerCase();                                     
  if(word.length <= 3) { return 1; }                             
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   
    word = word.replace(/^y/, '');                                 
    return word.match(/[aeiouy]{1,2}/g).length;                    
}