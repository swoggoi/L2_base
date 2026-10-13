function toWeirdCase(string){
  let c
  let newString = ''
  for(let i = 0; i < string.length; i++){
    for(c = 0;;i++, c++){
      if(string[i] === ' '){
        newString += ' '
        break;
      } if(i === string.length){
        break;
      }
      
      if(c % 2 === 0){
        newString += string[i].toUpperCase();
      }
      else if(c%2 !== 0){
         newString += string[i].toLowerCase();
      }
    }
  }
  return newString
}