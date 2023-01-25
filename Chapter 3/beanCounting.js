let count = 0;
function countBs(string) {
    for (i = 0; i < string.length; i++)
        if (string[i] == "B") {
            count += 1
        } else {
            count += 0
        }
    return count
}

// console.log(countBs("BananaB"))

function countChar(string, letter) {
    for (i = 0; i < string.length; i++)
        if (string[i] == letter) {
            count += 1
        } else {
            count += 0
        }
    return count
}

console.log(countChar("Abacate","a"))