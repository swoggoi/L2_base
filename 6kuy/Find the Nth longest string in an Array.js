function longest(arr, n) {
  let mas = [];
  let max = arr[0]
  let masI
  for(let i = 0; i < n; i++){
    for(let j=0; j < arr.length;j++){
      if(max.length < arr[j].length){
        masI = j
        max = arr[j]
   }
  }
    arr[masI] = ''
    mas[i] = max
    max=''    
 }
  return mas[n-1]
}