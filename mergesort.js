let even = [2, 5, 3, 1, 99, 25]
let odd = [1, 11, 3, 55, 2, 47238, 4, 333, 66, 82, 79, 5, 14]

function split(wholeArray) {
    let firstHalf = wholeArray.slice(0, Math.floor(wholeArray.length/2))
    let secondHalf = wholeArray.slice(Math.floor(wholeArray.length/2))
    return [firstHalf, secondHalf];
}
// console.log(split(even))
// console.log(split(odd))

function merge(array1, array2) {
    let newArr = []
    while (array1.length && array2.length) {
        if (array1[0]<array2[0]) {
            newArr.push(array1.shift())
        } else {
            newArr.push(array2.shift())
        }
    }
    return newArr.concat(array1.slice().concat(array2.slice()))
}

// console.log(merge(split(even)))

function mergeSort(array) {
    debugger
    if (array.length===1) {
        return array
    } else {
         let splitArray = split(array)
         return merge(mergeSort(splitArray[0]), mergeSort(splitArray[1]))

    }
  }

  console.log(mergeSort(odd))