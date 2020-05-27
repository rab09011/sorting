function bubbleSort(array) {
    let count = 0
    if(array.length===1 || array.length===0) {
        return array
    }
    for (let i = 0; i <array.length; i++) {
        for (let j = 0; j<array.length; j++) {
            if(array[j]>array[j+1]) {
                helperFunc(array, j)
            }
        }
    }
    return array
}

const helperFunc = (array, j) => {
    let temp = array[j] 
    array[j] = array[j+1] 
    array[j+1]= temp 
    return array
}    