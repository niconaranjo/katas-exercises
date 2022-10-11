function feast(beast, dish) {
  const beastSplit = beast.split('')
  const dishSplit = dish.split('')
  console.log(beastSplit[0] === dishSplit[0] && beastSplit.pop() === dishSplit.pop())
}

feast("great blue heron", "garlic naan")


/* Other solution from someone */
function feastOther(beast, dish) {
  return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
}