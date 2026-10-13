function bingo(ticket, win) {
  let miniWins = 0;
  for (let [str, code] of ticket) {
    let hasMatch = false
        for(let char of str){
            if(char.charCodeAt(0) === code){
                hasMatch = true;
                break;
            }
            if(hasMatch){
                miniWins++;
            }
        }
  }
  return miniWins >= win ? 'Winner!' : 'Loser!';
}