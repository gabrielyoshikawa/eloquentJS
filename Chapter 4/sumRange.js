function sumRange(start, end, step) {
    arrayNumbers = [];
    if (step >= 1) {
        for (let i = start; i <= end; i += step) {
            arrayNumbers.push(i);
        }
        return arrayNumbers;
    }
    else if (step < 0) {
        for (let i = end; i >= start; i += step) {
            arrayNumbers.push(i);
        }
        return arrayNumbers;
    } else {
        return []
    }
}

console.log(sumRange(1, 10, 2))

// -----------------------------------------

function sumNumbers(array) {
    arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    valorSoma = 0;
    for (let i = 0; i < array.length; i++)
        valorSoma += array[i];
    return(valorSoma);
}

sumNumbers(arrayNumbers);