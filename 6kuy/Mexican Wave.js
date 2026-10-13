function wave(str){
  let list = [];
  
  for(let i = 0, a = 0; i < str.length; i++){
    if(str[i] === ' '){
        continue;
      }
    let newStr = ''
    for(let j = 0; j < str.length; j++){
      
      if(j === i){
        newStr += str[j].toUpperCase()
      }else{
        newStr += str[j]
      }
      
    }
  list[a] = newStr
    a++
  }
  return list
}