var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
const array = chocolateBars
var item = "Milky Way"

function addElementToBeginningOfArray(array, element) {

  const moreChocolateBars = [element, ...array]
  return moreChocolateBars

}


function destructivelyAddElementToBeginningOfArray(array, element) {

  chocolateBars.unshift(element)
  return array

}

function addElementToEndOfArray(array, element) {

  const moreChocolateBars = [...array, element]
  return moreChocolateBars

}


function destructivelyAddElementToEndOfArray(array, item) {

  chocolateBars.push(item)
  return array

}

function accessElementInArray (array, index){
  array=chocolateBars
  index=array[i]
  i=1
  return array[i]

}
