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



function destructivelyRemoveElementFromBeginningOfArray (array) {
  array=chocolateBars
  array.shift()

  return array
}

function removeElementFromBeginningOfArray (array) {
  array = chocolateBars
  moreChocolateBars = array.slice(1)
  return moreChocolateBars
}
