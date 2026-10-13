function whatCentury(year) {

  const cent = Math.ceil(Number(year) / 100);
  
  if (cent >= 11 && cent <= 13) {
    return cent + "th";
  }
  
  switch (cent % 10) {
    case 1:  return cent + "st";
    case 2:  return cent + "nd";
    case 3:  return cent + "rd";
    default: return cent + "th";
  }
}
