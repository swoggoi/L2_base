function hasTwoCubeSums(n) {
  let count = 0;
  const limit = Math.cbrt(n);
  for (let a = 1; a < limit; a++) {
    const a3 = a ** 3;
    const b3 = n - a3;
    
    const b = Math.round(Math.cbrt(b3));
    if (b > 0 && b3 === b ** 3) {
      count++;
    }
    if (count === 4) {
      return true;
    }
  }

  return false;
}
