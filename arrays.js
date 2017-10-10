var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
const array = chocolateBars
var item = "Milky Way"

function addElementToBeginningOfArray(array, item) {

  const moreChocolateBars = [item, ...array]
  return moreChocolateBars

}


function destructivelyAddElementToBeginningOfArray(array, item) {

  chocolateBars.unshift(item)
  return array

}
