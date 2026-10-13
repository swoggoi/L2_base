function findMissing(list) {
  let step = (list[list.length - 1] - list[0]) / list.length; 
  for (let i = 0; i < list.length - 1; i++) { 
    if (list[i] + step !== list[i + 1]) {
      return list[i] + step;
    }
  }
  return list[0];
}

